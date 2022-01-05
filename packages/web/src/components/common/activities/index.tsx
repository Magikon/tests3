import React, { FC } from 'react';
import { Activity } from 'src/components';
import { useActivities } from './hooks/useActivities';

export const ActivitiesRooms: Record<string, 'ALL' | 'PROJECTS'> = {
  all: 'ALL',
  projects: 'PROJECTS'
}

interface IActivitiesProps {
  room: 'ALL' | 'PROJECTS'
}

export const Activities: FC<IActivitiesProps> = React.memo((props) => {
  const { room } = props;
  const { activities } = useActivities(room)

  return <div className={'activities'}>
    {activities.map((a, i) => <Activity key={i + a.id} activity={a} room={room} />)}
  </div>
})