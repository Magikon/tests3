import fetch from '../helpers/fetch';
import { FetchError } from '../helpers/fetch/FetchError';
import { FetchResponse } from '../helpers/fetch/FetchResponse';
import { INotification } from '../../typings/notifications.types';

const NOTIFICATIONS_PATH = '/notifications';

export interface IInviteResponse {}

const handleError = (error: FetchError) => {
    return error.errorResponse;
};

export const requestNotifications = async (): Promise<FetchResponse<INotification[]>> => {
    try {
        const { data } = await fetch({
            path: NOTIFICATIONS_PATH,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestInviteResponse = async (
    notificationId: string,
    actionId: string,
): Promise<FetchResponse<IInviteResponse[]>> => {
    try {
        const { data } = await fetch({
            path: `${NOTIFICATIONS_PATH}/${notificationId}/${actionId}`,
            method: 'POST',
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
