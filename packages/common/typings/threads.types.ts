import { IBreadcrumb } from './common.types';
import { IUser } from './users.types';
import { ITag } from './common.types';

export interface IThread {
    user_id: string;
    created_at: number;
    namespace: string;
    id: string;
    name: string;
    members?: IUser[];
    tags?: ITag[];
    breadcrumbs?: IBreadcrumb[];
}

export interface IThreadCreate {
    id: string;
    name: string;
    members: string[];
    tags: string[];
    ref_room: string;
}

export interface IThreadUpdate extends Omit<Partial<IThreadCreate>, 'id'> {}
