import { IActivities } from './activities.types';
import { IMessage } from './messages.types';
import { IProject } from './projects.types';
import { IUser } from './users.types';

export const CacheEventTypes = {
    JobDeleted: 'job_deleted',
    JobUpdated: 'job_updated',
    MessageDeleted: 'message_deleted',
    MessagePosted: 'message_posted',
    ActivityDeleted: 'activity_deleted',
    ActivityUpdated: 'activity_updated',
} as const;

export type CacheEventTypeKeys = keyof typeof CacheEventTypes;

export interface ICacheStoreTypes<T = IMessage | IUser | IProject | IActivities> {
    updated_at: number;
    version: string;
    event: typeof CacheEventTypes[CacheEventTypeKeys];
    sortKey: string;
    namespace: string;
    details: T;
}

export interface ICacheMessagesType extends ICacheStoreTypes<IMessage> {}

export interface ICacheUsersType extends ICacheStoreTypes<IUser> {}

export interface ICacheProjectsType extends ICacheStoreTypes<IProject> {}

export interface ICacheActivitiesType extends ICacheStoreTypes<IActivities> {}
