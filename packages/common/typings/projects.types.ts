import { IUser } from './users.types';
import { ITag } from './common.types';

export interface IProject {
    id: string;
    name: string;
    namespace: string;
    notes?: string;
    teams?: string[];
    members: IUser[];
    tags?: ITag[];
    owner: IUser;
    parent_job_id?: string;
    subprojects?: IProject[];
    updated_at?: number;
}

export interface ICreateProject extends Omit<IProject, 'members' | 'tags'> {
    tags?: string[];
    members: string[];
}

export interface IUpdateProject extends Omit<IProject, 'members' | 'tags'> {
    tags?: string[];
    members?: string[];
}

export interface IProjectsGetFilter {
    type?: 'jobs' | 'sub_jobs' | 'all';
    parent_job_id?: string;
}
