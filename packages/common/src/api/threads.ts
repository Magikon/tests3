import fetch from '../helpers/fetch';
import { FetchError } from '../helpers/fetch/FetchError';
import { FetchResponse } from '../helpers/fetch/FetchResponse';
import { IThread, IThreadUpdate } from '../../typings/threads.types';

const handleError = (error: FetchError) => {
    return error.errorResponse;
};

const THREAD_PATH = '/threads';

export const requestThreadUpdate = async (id: string, payload: IThreadUpdate): Promise<FetchResponse<IThread>> => {
    try {
        const { data } = await fetch({
            path: `${THREAD_PATH}/${id}`,
            method: 'PUT',
            body: payload,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
