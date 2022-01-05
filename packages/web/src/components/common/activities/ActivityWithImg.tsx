import React, { FC } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Tag } from 'src/components';
import { Grid } from 'src/components';
import { Avatar } from 'src/components';
import { Tooltip } from 'src/components';
import { IconButton } from 'src/components';
import { Typography } from 'src/components';
import { humanReadableTime } from 'src/helpers';
import { useActivity } from './hooks/useActivity';
import { NotificationChip } from 'src/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IActivities } from '@hivot/common/typings/activities.types';
import { requestFileDownloadUrl } from '@hivot/common/src/api/files';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import './activities.css'

interface IActivity {
  activity: IActivities;
  room: string;
}


export const ActivityWithImg: FC<IActivity> = React.memo((props) => {
  const { activity, room } = props;
  const { title, isThread, onClickThreadIcon, onActivityClick, isSelected } = useActivity(activity, room);
  const [imgUrl, setImgUrl] = useState<any>('')

  useEffect(() => {
    (async () => {
      try {
        const attachment = activity.last_message.attachments[0];
        const req = await requestFileDownloadUrl(attachment?.filename, 50, 50);
        setImgUrl(req.data.url)
      } catch (e) {
        console.log('e');
      }
    })()
  }, [activity.last_message.attachments])

  return <Grid
    container
    p={1.3}
    className={`activity with-img ${isSelected ? 'selected' : ''}`}
    onClick={onActivityClick}>
    <Grid item xs className={'title'}>
      <NotificationChip label={activity.unread_message_count} />
      <Typography noWrap>
        {title}
      </Typography>
    </Grid>
    <Grid item xs="auto" className={'date-part'}>
      {humanReadableTime(activity.updated_at)} &nbsp;
      {
        isThread
        &&
        <Tooltip title="Click to open thread">
          <IconButton size={'small'} onClick={() => onClickThreadIcon(activity.id)}>
            <FontAwesomeIcon
              title={'Click to Open Thread'}
              icon={faArrowAltCircleRight} />
          </IconButton>
        </Tooltip>
      }
    </Grid>
    <Grid container mt={2}>
      <Grid item mr={1} xs={'auto'}>
        <Avatar style={{ width: 60, height: 60, borderRadius: 10 }} src={imgUrl} />
      </Grid>
      <Grid item mr={2} xs>
        <Grid container mt={1}>
          <Grid item mr={1} xs={'auto'}>
            <Avatar
              style={{ height: 22, width: 22 }}
              src={activity.last_message.user.picture} />
          </Grid>
          <Grid item xs style={{ fontWeight: 'bold' }}>
            {activity.last_message.user.name}
          </Grid>
          <Grid xs={12} item>
            <Grid item xs className={'message'}>
              {activity.last_message.message}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid item mt={2} xs={12}>
      {activity.tags.map((t) => <Tag key={t.id} label={t.name} />)}
    </Grid>
  </Grid>
})