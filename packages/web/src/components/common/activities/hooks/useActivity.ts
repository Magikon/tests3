import { useMemo } from 'react';
import { useCallback } from 'react';
import { first, last } from 'lodash'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'src/store/store';
import { IUser } from '@hivot/common/typings/users.types';
import { ActivitiesRooms } from 'src/components/common/activities';
import { IActivities } from '@hivot/common/typings/activities.types';
import { useExcludeMe } from 'src/components/pages/app/hooks/useExcludeMe';
import { selectHomeActivity } from 'src/components/pages/app/home/appHomeSlice';
import { selectProjectsActivity } from 'src/components/pages/app/projects/projectsSlice';

const normalizeMemberNames = (members: IUser[]) => {
  return members.length > 3
    ? `(${members.length + 1}) ${members?.map((member) => member.name).join(', ')}`
    : members?.map((member) => member.name).join(', ');
};

export const clearBreaksAndWhiteSpaces = (str?: string): string => {
  if (!str) {
    return '';
  }
  return str.replace(/(?:\r\n|\r|\n)/g, ' ').trim();
}


export const useActivity = (activity: IActivities, room) => {
  const excludeMe = useExcludeMe(activity.members);
  const { breadcrumbs, type, last_message } = activity;
  const isOnlyProjectsTree = breadcrumbs.every((f) => f.type === 'job');
  const isImagePreview = !!last_message.attachments?.length;
  const isTreePreview = breadcrumbs.length > 1 && !isOnlyProjectsTree;
  const isThread = type === 'thread';
  const isJob = type === 'job';
  const isTypePersonal = type === 'personal';
  const dispatch = useDispatch();
  const {
    appHome: { selectedActivity },
    projects: { selectedProjectsActivity }
  } = useTypedSelector(state => state);

  const isSelected = useMemo(() => {
    if (room === ActivitiesRooms.all) {
      return selectedActivity?.sortKey === activity.sortKey
    } else if (room === ActivitiesRooms.projects) {
      return selectedProjectsActivity?.sortKey === activity.sortKey
    }

  }, [selectedActivity, activity, room, selectedProjectsActivity]);

  const treadName = useMemo(() => {
    if (type === 'personal') {
      return normalizeMemberNames(excludeMe);
    }
    // multiple jobs/sub jobs
    if (isJob) {
      return breadcrumbs.map((bread) => bread.name).join('/');
    }
    return last(breadcrumbs)?.normalizedName;
  }, [breadcrumbs, type, excludeMe, isJob])

  const getTitle = useMemo(() => {
    const rootItem = first(breadcrumbs);
    const currentItem = last(breadcrumbs);
    const rootIsPersonal = rootItem.type === 'personal';
    if (rootItem) {
      if (breadcrumbs.length === 1) {
        return isTypePersonal ? normalizeMemberNames(excludeMe) : clearBreaksAndWhiteSpaces(rootItem.name);
      }
      if (isThread) {
        if (rootItem.type === 'job') {
          return breadcrumbs
            .filter((b) => b.type === 'job')
            .map((j) => j.name)
            .join('/');
        }
        return rootIsPersonal
          ?
          normalizeMemberNames(excludeMe)
          :
          clearBreaksAndWhiteSpaces(rootItem.name);
      }
      if (isJob) {
        return currentItem?.name || '';
      }
    }
    return ''
  }, [excludeMe, breadcrumbs, isJob, isThread, isTypePersonal]);


  const onClickThreadIcon = useCallback((id) => {
    console.log('Clicked thread icon id: ', id)
  }, [])

  const onActivityClick = useCallback(() => {
    if (room === ActivitiesRooms.all) {
      dispatch(selectHomeActivity(activity));
    } else if (room === ActivitiesRooms.projects) {
      dispatch(selectProjectsActivity(activity));
    }
  }, [dispatch, activity, room])

  return {
    title: isTreePreview ? getTitle : treadName,
    treadName,
    isImagePreview,
    onClickThreadIcon,
    onActivityClick,
    isThread,
    isSelected
  }
}