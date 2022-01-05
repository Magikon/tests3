import fetch from '../helpers/fetch';
import { FetchError } from '../helpers/fetch/FetchError';
import { FetchResponse } from '../helpers/fetch/FetchResponse';
import { IPendingInvitation, IUser, IUserInvite, IUsersGetFilters, IUserInviteResponse } from '../../typings/users.types';

export interface IResendInvite {}

export interface IRevokeInvite {}

const handleError = (error: FetchError) => {
    return error.errorResponse;
};

const USERS_PATH = '/users';
const INVITE_PATH = `${USERS_PATH}/invite`;
const PENDING_INVITES_PATH = `${USERS_PATH}/pendingInvites`;
const RESEND_INVITATION_PATH = `${USERS_PATH}/resendInvite/`;
const REVOKE_INVITATION_PATH = `${USERS_PATH}/revokeInvite/`;

export const requestUsers = async (filters?: IUsersGetFilters): Promise<FetchResponse<IUser[]>> => {
    try {
        const { data } = await fetch({
            path: USERS_PATH,
            body: {
                include_me: false,
                ...filters,
            },
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestInviteUsers = async (
    users: IUserInvite[],
    validateOnly: boolean = false,
): Promise<FetchResponse<IUserInviteResponse[]>> => {
    try {
        const { data } = await fetch({
            params: {
                validate_only: validateOnly,
            },
            path: INVITE_PATH,
            method: 'POST',
            body: {
                users,
            },
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestPendingInvitations = async (): Promise<FetchResponse<IPendingInvitation[]>> => {
    try {
        const { data } = await fetch({
            path: PENDING_INVITES_PATH,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestResendInvitation = async (invitationId: string): Promise<FetchResponse<IResendInvite>> => {
    try {
        const { data } = await fetch({
            path: `${RESEND_INVITATION_PATH}${invitationId}`,
            method: 'POST',
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestRevokeInvitation = async (invitationId: string): Promise<FetchResponse<IRevokeInvite>> => {
    try {
        const { data } = await fetch({
            path: `${REVOKE_INVITATION_PATH}${invitationId}`,
            method: 'POST',
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
