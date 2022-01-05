import { IAttachment, IMessageAttachment } from './attachments.types';
import { IUser } from './users.types';
import { ITag } from './common.types';

export interface IMessageMentions {
    [key: string]: {
        type: 'job' | 'user';
        value: string;
    };
}

export interface IMessageThreadDetails {
    id: string;
    owner: IUser;
    created_at: number;
}

export interface IMessage {
    id: string;
    uid: string;
    message: string;
    room: string;
    user: IUser;
    tags?: ITag[];
    sent_at: number;
    mentions?: IMessageMentions;
    has_thread: boolean;
    reactions: any;
    thread_details: IMessageThreadDetails;
    tasks: ITask[];
    attachments?: IAttachment[];
}

export interface ITask {
    id: string;
    namespace: string;
    owner: IUser;
    member_ids: string[];
    type: string;
    created_at: number;
}

export interface ISendMessagePayload {
    uid: string;
    message: string;
    parentRoomId?: string;
    parentMessageId?: string;
    room: string;
    mentions?: IMessageMentions;
    attachments?: IMessageAttachment[];
}
