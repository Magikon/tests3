import fetch from '../helpers/fetch';
import { FetchError } from '../helpers/fetch';
import { FetchResponse } from '../helpers/fetch';
import { IActivities, IActivitiesSearch } from '../../typings/activities.types';
import { IPagination } from '../../typings/common.types';

const ACTIVITIES_PATH = '/activities';

const handleError = (error: FetchError) => {
    return error.errorResponse;
};

export const requestActivities = async (roomId?: string): Promise<FetchResponse<IActivities[]>> => {
    try {
        const { data } = await fetch({
            path: `${ACTIVITIES_PATH}`,
            body: {
                room: roomId,
                is_archived: false,
            },
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestActivitiesSearch = async (
    filters: IActivitiesSearch,
    pagination?: IPagination,
): Promise<FetchResponse<IActivities[]>> => {
    try {
        let path = `${ACTIVITIES_PATH}/search`;
        if (pagination) {
            path += `?offset=${pagination.offset}&limit=${pagination.limit}`;
        }
        const { data } = await fetch({
            path,
            method: 'POST',
            body: {
                ...filters,
            },
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
