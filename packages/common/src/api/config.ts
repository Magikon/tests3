import fetch from '../helpers/fetch';
import { FetchError } from '../helpers/fetch/FetchError';
import { FetchResponse } from '../helpers/fetch/FetchResponse';
import { IConfigs } from '../../typings/common.types';

const handleError = (error: FetchError) => {
    return error.errorResponse;
};

const CONFIG_PATH = '/config';
const BADGE_PATH = '/badges';

export const requestConfig = async (): Promise<FetchResponse<IConfigs>> => {
    try {
        const { data } = await fetch({
            path: CONFIG_PATH,
            noAuth: true,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestUserBadges = async (lastActivity: number, resourceName: string): Promise<FetchResponse<number>> => {
    try {
        const { data } = await fetch({
            path: `${BADGE_PATH}?last_activity=${lastActivity}&resource_name=${resourceName}`,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
