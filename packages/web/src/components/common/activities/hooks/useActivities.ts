import { useMemo } from 'react';
import { useTypedSelector } from 'src/store/store';
import { ActivitiesRooms } from 'src/components/common/activities';

export const useActivities = (room: string) => {
  const {
    appHome: { activities: homeActivities },
    projects: { activities: projectActivities }
  } = useTypedSelector(state => state);

  const activities = useMemo(() => {
    if (room === ActivitiesRooms.projects) {
      return projectActivities;
    }
    return homeActivities;
  }, [homeActivities, projectActivities, room])

  return { room, activities }
}