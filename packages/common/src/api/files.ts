import fetch from '../helpers/fetch';
import { FetchError } from '../helpers/fetch/FetchError';
import { FetchResponse } from '../helpers/fetch/FetchResponse';
import { IFileDownloadResponse, IFIlePayload, IFileResponse } from '../../typings/files.types';

const FILES_PATH = '/files';

const handleError = (error: FetchError) => {
    return error.errorResponse;
};

export const requestFileUrl = async (
    payload: IFIlePayload,
    isPublic?: boolean,
): Promise<FetchResponse<IFileResponse>> => {
    try {
        const { data } = await fetch({
            path: FILES_PATH,
            method: 'POST',
            body: payload,
            params: {
                profile_picture: isPublic,
            },
        });
        return data;
    } catch (e) {
        const err: any = handleError(e);
        const keys = Object.keys(err.detail.errors);
        throw {
            title: err.detail.message,
            detail: keys.map((k) => err.detail.errors[k]).join(', '),
        };
    }
};

export const requestFileDownloadUrl = async (
    fileName: string,
    height: number = 0,
    width: number = 0,
    redirect: boolean = false,
): Promise<FetchResponse<IFileDownloadResponse>> => {
    try {
        const { data } = await fetch({
            path: `${FILES_PATH}/${fileName}`,
            body: {
                height,
                width,
                redirect,
            }
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
