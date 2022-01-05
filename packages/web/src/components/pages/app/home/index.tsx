import React from 'react';
import { FC } from 'react';
import { Activities } from 'src/components';
import { Grid } from 'src/components/index';
import { useAppHome } from './hooks/useAppHome';
import { Typography } from 'src/components/index';
import { ActivitiesRooms } from 'src/components/common/activities';
import './apphome.css';

export const AppHome: FC = React.memo(() => {
  const { appHome: { selectedActivity } } = useAppHome()

  return <div className={'app-home'}>
    <Grid container>
      <Grid className={'sidebar'} item xs={3}>
        <Activities room={ActivitiesRooms.all} />
      </Grid>
      <Grid item xs={3} />
      <Grid pt={3} item xs={3} className={'content'}>
        <div style={{ width: 400, wordWrap: 'break-word' }}>
          {
            selectedActivity
            &&
            <>
              <h2 style={{ textAlign: 'center', color: '#ef5350' }}> Selected Activity Object</h2>
              <Typography style={{ fontSize: 12 }}>
                {JSON.stringify(selectedActivity)}
              </Typography>
            </>
          }
        </div>
      </Grid>
    </Grid>
  </div>
});