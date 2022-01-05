import fetch from '../helpers/fetch';
import { FetchError } from '../helpers/fetch/FetchError';
import { FetchResponse } from '../helpers/fetch/FetchResponse';
import { IActivities, IActivitiesSearch } from '../../typings/activities.types';
import { IMessageAttachment } from '../../typings/attachments.types';
import { IPagination, OrderDirection } from '../../typings/common.types';
import { IMessage, IMessageMentions, ISendMessagePayload } from '../../typings/messages.types';
import { IRoomInfo } from '../../typings/room.types';

export interface INewChatPayload {
    uid: string;
    message: string;
    attachments?: IMessageAttachment[];
    mentions?: IMessageMentions;
}

const CHAT_PATH = '/chat';

const handleError = (error: FetchError) => {
    return error.errorResponse;
};

export const requestRoomInfo = async (room: string): Promise<FetchResponse<IRoomInfo>> => {
    try {
        const encodedUri = escape(`${CHAT_PATH}/${room}`);
        const { data } = await fetch({
            path: encodedUri,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestChatHistory = async (
    room: string,
    lastId?: string,
    orderDirection: OrderDirection = 'descending',
): Promise<FetchResponse<IMessage[]>> => {
    try {
        const encodedUri = escape(`${CHAT_PATH}/${room}/history`);
        const { data } = await fetch({
            path: encodedUri,
            body: {
                last_id: lastId,
                order_direction: orderDirection,
            },
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestNewChat = async (payload: INewChatPayload): Promise<FetchResponse<IActivities>> => {
    try {
        const { data } = await fetch({
            path: `${CHAT_PATH}/new`,
            method: 'POST',
            body: payload,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};

export const requestSendMessage = async (payload: ISendMessagePayload): Promise<FetchResponse<IMessage>> => {
    try {
        const { data } = await fetch({
            path: `${CHAT_PATH}/sendMessage`,
            method: 'POST',
            body: payload,
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
