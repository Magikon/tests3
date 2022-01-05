import { IBreadcrumb } from './common.types';
import { IUser } from './users.types';
import { ITag } from './common.types';

export interface IRoomInfo {
    id: string;
    type: string;
    breadcrumbs: IBreadcrumb[];
    members: IUser[];
    namespace: string;
    user_id: string;
    search_tags?: string[];
    tags?: ITag[];
    name: string;
    owner: IUser;
    linked_message?: ILinkedMessage;
    is_deleted: boolean;
    created_at: number;
    updated_at?: number;
    updated_by?: string;
}

export interface ILinkedMessage {
    room: string;
    id: string;
}
