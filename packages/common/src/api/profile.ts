import fetch from '../helpers/fetch';
import { FetchError } from '../helpers/fetch/FetchError';
import { FetchResponse } from '../helpers/fetch/FetchResponse';
import { IProfile } from '../../typings/users.types';

const PROFILE_PATH = '/profile';

const handleError = (error: FetchError) => {
    return error.errorResponse;
};

export const requestProfile = async (): Promise<FetchResponse<IProfile>> => {
    try {
        const { data } = await fetch({
            path: PROFILE_PATH,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestUpdateProfile = async (payload: Partial<IProfile>): Promise<FetchResponse<IProfile>> => {
    try {
        const { data } = await fetch({
            path: PROFILE_PATH,
            method: 'PUT',
            body: payload,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestDeleteProfile = async (): Promise<FetchResponse<boolean>> => {
    try {
        const { data } = await fetch({
            path: PROFILE_PATH,
            method: 'DELETE',
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
