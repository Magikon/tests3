import fetch from '../helpers/fetch';
import { FetchError } from '../helpers/fetch';
import { FetchResponse } from '../helpers/fetch';

export type CheckPhoneNumberResponse = 'complete' | 'pending' | 'incomplete';

export interface IInvitationCodeVerifyPayload {
    code: string;
}

export interface ILoginVerifyPayload {
    session: string,
    username: string,
    otp: string
}

export interface InvitationVerifyResponse {
    is_available: boolean;
}

const CHECK_PHONE_NUMBER_PATH = '/auth/check-phone';
const LOGIN_BY_PHONE_NUMBER_PATH = '/auth/login';
const VERIFY_LOGIN_PATH = '/auth/login/verify';
const INVITATION_VERIFY_PATH = '/auth/check-code';
const USERNAME_VERIFY_PATH = '/auth/check-username';
const RESET_BADGE_VALUE_PATH = '/auth/reset-badge-count';
const LOGOUT_PATH = '/auth/logout';

const handleError = (error: FetchError) => {
    console.log('zzzzzzz',error.errorResponse)
    return error.errorResponse;
};

export const requestCheckPhoneNumber = async (
    phoneNumber: string,
): Promise<FetchResponse<CheckPhoneNumberResponse>> => {
    try {
        const { data } = await fetch({
            path: CHECK_PHONE_NUMBER_PATH,
            method: 'POST',
            body: {
                phone_number: phoneNumber,
            },
            noAuth: true,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestToLogin = async (
  phoneNumber: string,
): Promise<FetchResponse<any>> => {
    try {
        const { data } = await fetch({
            path: LOGIN_BY_PHONE_NUMBER_PATH,
            method: 'POST',
            body: {
                username: phoneNumber,
            },
            noAuth: true,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestToVerifyLogin = async (
  payload: ILoginVerifyPayload
): Promise<FetchResponse<any>> => {
    try {
        const { data } = await fetch({
            path: VERIFY_LOGIN_PATH,
            method: 'POST',
            body: payload,
            noAuth: true,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestVerifyInvitationCode = async (
    payload: IInvitationCodeVerifyPayload,
): Promise<FetchResponse<InvitationVerifyResponse>> => {
    try {
        const { data } = await fetch({
            path: INVITATION_VERIFY_PATH,
            method: 'POST',
            body: payload,
            noAuth: true,
        });

        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestVerifyUsername = async (username: string) => {
    try {
        const { data } = await fetch({
            path: USERNAME_VERIFY_PATH,
            method: 'POST',
            body: {
                username,
            },
            noAuth: true,
        });

        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestResetBadgeValue = async (devicePushToken: string) => {
    try {
        await fetch({
            path: RESET_BADGE_VALUE_PATH,
            method: 'POST',
            body: {
                device_token: devicePushToken,
            },
        });
    } catch (e) {
        throw handleError(e);
    }
};

export const requestLogout = async (devicePushToken: string) => {
    try {
        const { data } = await fetch({
            path: LOGOUT_PATH,
            method: 'POST',
            body: {
                device_token: devicePushToken,
            },
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
