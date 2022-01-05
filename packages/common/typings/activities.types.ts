import { IAttachment } from './attachments.types';
import { IBreadcrumb } from './common.types';
import { IMessageMentions } from './messages.types';
import { IUser } from './users.types';
import { ITag } from './common.types';

export type SearchFlagTypes = 'job' | 'files' | 'personal' | 'apps' | 'links';

interface IBaseActivity {
    updated_at: number;
    sortKey: string;
    namespace: string;
    id: string;
    tags?: ITag[];
    search_tags?: string[];
    breadcrumbs: IBreadcrumb[];
}

export interface ILastMessage {
    sent_at: number;
    uid: string;
    user_id: string;
    id: string;
    message: string;
    user: IUser;
    room: string;
    tags: ITag[];
    attachments: IAttachment[];
}

export type ActivityTypes = 'personal' | 'job' | 'thread';

export interface IActivities extends IBaseActivity {
    last_message: ILastMessage;
    type: ActivityTypes;
    room: string;
    members: IUser[];
    unread_message_count: number;
}

export interface IActivitiesSearch {
    mentions?: IMessageMentions;
    tags?: string[];
    text?: string;
    flags: SearchFlagTypes[];
}
