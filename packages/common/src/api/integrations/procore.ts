import fetch from '../../helpers/fetch';
import { FetchError } from '../../helpers/fetch/FetchError';
import { FetchResponse } from '../../helpers/fetch/FetchResponse';
import { INTEGRATION_BASE_PATH } from './common';

// TO DO move interfaces in app/types after ejecting the app
interface IProcoreProject {
    id: number;
    name: string;
    company_id: number;
}

interface IProcoreMergeProjectPayload {
    resource_id: string;
    job_id: string;
    company_id: string;
}
//

const PROCORE_BASE_PATH = `${INTEGRATION_BASE_PATH}procore/`;

const PROCORE_USERS_PATH = `${PROCORE_BASE_PATH}resources/users`;
const PROCORE_PROJECTS_PATH = `${PROCORE_BASE_PATH}resources/project`;
const PROCORE_MERGE_PROJECT_PATH = `${PROCORE_BASE_PATH}integrate`;

const handleError = (error: FetchError) => {
    return error.errorResponse;
};

export const requestProcoreUsers = async (): Promise<FetchResponse<any>> => {
    try {
        const { data } = await fetch({
            path: PROCORE_USERS_PATH,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestProcoreProjects = async (): Promise<FetchResponse<IProcoreProject[]>> => {
    try {
        const { data } = await fetch({
            path: PROCORE_PROJECTS_PATH,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestProcoreMergeProject = async (payload: IProcoreMergeProjectPayload): Promise<FetchResponse<any>> => {
    try {
        const { data } = await fetch({
            path: PROCORE_MERGE_PROJECT_PATH,
            method: 'POST',
            body: payload,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
