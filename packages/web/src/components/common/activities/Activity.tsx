import React, { FC } from 'react';
import { last } from 'lodash';
import { Tag } from 'src/components';
import { Grid } from 'src/components';
import { Avatar } from 'src/components';
import { Tooltip } from 'src/components';
import { IconButton } from 'src/components';
import { Typography } from 'src/components';
import { humanReadableTime } from 'src/helpers';
import { useActivity } from './hooks/useActivity';
import { NotificationChip } from 'src/components';
import { ActivityWithImg } from './ActivityWithImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IActivities } from '@hivot/common/typings/activities.types';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import './activities.css';

interface IActivity {
  activity: IActivities;
  room: string;
}

export const Activity: FC<IActivity> = React.memo((props) => {
  const { activity, room } = props;
  const { title, isThread, onClickThreadIcon, onActivityClick, isSelected } = useActivity(activity, room);

  if (activity.last_message.attachments?.length) {
    return <ActivityWithImg activity={activity} room={room} />
  } else {
    return <Grid
      container
      p={1.3}
      className={`activity ${isSelected ? 'selected' : ''}`}
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
        <Grid item mr={2} xs={'auto'}>
          <Avatar src={activity.last_message.user.picture} />
        </Grid>
        <Grid item className={'message'} xs>
          {
            isThread
            &&
            <Typography style={{ fontWeight: 'bold', color: 'black' }}>
              {activity?.breadcrumbs?.length ? last(activity.breadcrumbs).name : ''}
            </Typography>
          }
          {activity.last_message.message}
        </Grid>
      </Grid>
      <Grid item mt={2} xs={12}>
        {activity.tags.map((t) => <Tag key={t.id} label={t.name} />)}
      </Grid>
    </Grid>
  }
})