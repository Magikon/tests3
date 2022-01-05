import fetch from '../helpers/fetch';
import { FetchError } from '../helpers/fetch/FetchError';
import { FetchResponse } from '../helpers/fetch/FetchResponse';
import { ICreateProject, IProject, IProjectsGetFilter, IUpdateProject } from '../../typings/projects.types';
import { OAuthServiceType } from './integrations';

const JOB_PATH = '/jobs';
const JOB_FOR_INTEGRATION_PATH = '/jobs/jobsToIntegrate/';

const handleError = (error: FetchError | any) => {
    return error.errorResponse;
};

export const requestJobs = async (filter?: IProjectsGetFilter): Promise<FetchResponse<IProject[]>> => {
    try {
        const { data } = await fetch({
            path: JOB_PATH,
            body: {
                ...filter,
                is_archived: false,
            },
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestProjectsForIntegration = async (
    integration: OAuthServiceType,
): Promise<FetchResponse<IProject[]>> => {
    try {
        const { data } = await fetch({
            path: `${JOB_FOR_INTEGRATION_PATH}${integration}`,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestJobById = async (jobId: string): Promise<FetchResponse<IProject>> => {
    try {
        const { data } = await fetch({
            path: `${JOB_PATH}/${jobId}`,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestCreateJob = async (payload: Partial<ICreateProject>): Promise<FetchResponse<IProject>> => {
    try {
        const { data } = await fetch({
            path: JOB_PATH,
            method: 'POST',
            body: payload,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestJobUpdate = async (
    id: string,
    payload: Partial<IUpdateProject>,
): Promise<FetchResponse<IProject>> => {
    try {
        const { data } = await fetch({
            path: `${JOB_PATH}/${id}`,
            method: 'PUT',
            body: payload,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
