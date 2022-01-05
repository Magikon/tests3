import fetch from '../helpers/fetch';
import { FetchError } from '../helpers/fetch/FetchError';
import { FetchResponse } from '../helpers/fetch/FetchResponse';
import { ISuggestion } from '../../typings/common.types';

const handleError = (error: FetchError) => {
    return error.errorResponse;
};

const TYPE_AHEAD_PATH = '/typeahead';

export const requestUserSuggestions = async (val: string): Promise<FetchResponse<ISuggestion[]>> => {
    try {
        const { data } = await fetch({
            path: `${TYPE_AHEAD_PATH}/mentions`,
            body: {
                q: val,
            },
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestTagsSuggestions = async (val: string): Promise<FetchResponse<ISuggestion[]>> => {
    try {
        const { data } = await fetch({
            path: `${TYPE_AHEAD_PATH}/tags`,
            body: {
                q: val,
            },
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
