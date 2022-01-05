import React from 'react';
import { FC } from 'react';
import { Grid } from 'src/components/index';
import { Activities } from 'src/components';
import { Typography } from 'src/components/index';
import { useProjects } from './hooks/useProjects';
import './projects.css';

export const Projects: FC = React.memo(() => {
  const { projects: { selectedProjectsActivity } } = useProjects()

  return <div className={'projects'}>
    <Grid container>
      <Grid className={'sidebar'} item xs={3}>
        <Activities room={'PROJECTS'} />
      </Grid>
      <Grid item xs={3} />
      <Grid pt={3} item xs={3} className={'content'}>
        <div style={{ width: 400, wordWrap: 'break-word' }}>
          {
            selectedProjectsActivity
            &&
            <>
              <h2 style={{ textAlign: 'center', color: '#ef5350' }}> Selected Activity Object</h2>
              <Typography style={{ fontSize: 12 }}>
                {JSON.stringify(selectedProjectsActivity)}
              </Typography>
            </>
          }
        </div>
      </Grid>
    </Grid>
  </div>
});