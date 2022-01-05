import fetch from '../helpers/fetch';
import { FetchError } from '../helpers/fetch/FetchError';
import { FetchResponse } from '../helpers/fetch/FetchResponse';
import { ICacheStoreTypes } from '../../typings/cache-store.types';

const handleError = (error: FetchError) => {
    return error.errorResponse;
};

const CACHE_STORE_PATH = '/cache-store';

export const requestCacheStore = async (version = '0', limit = 100): Promise<FetchResponse<ICacheStoreTypes[]>> => {
    try {
        const { data } = await fetch({
            path: CACHE_STORE_PATH,
            body: {
                version,
                limit,
            },
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
