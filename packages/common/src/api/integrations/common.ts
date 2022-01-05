import fetch from '../../helpers/fetch';
import { FetchError } from '../../helpers/fetch/FetchError';
import { FetchResponse } from '../../helpers/fetch/FetchResponse';

// TO DO move it in app/types after ejecting the app
export type OAuthServiceType = 'procore';

export interface IIntegrationAuthenticationStateResponse {
    id: number;
    login: string;
    name: string;
}

export const INTEGRATION_BASE_PATH = '/third-party-integrations/';

const getIntegrationAuthenticationPath = (service: OAuthServiceType) => {
    return `${INTEGRATION_BASE_PATH}${service}`;
};

const handleError = (error: FetchError) => {
    return error.errorResponse;
};

export const requestCheckIntegrationAuthenticationState = async (
    service: OAuthServiceType,
): Promise<FetchResponse<IIntegrationAuthenticationStateResponse | null>> => {
    try {
        const { data } = await fetch({
            path: getIntegrationAuthenticationPath(service),
        });
        return data;
    } catch (e) {
        return {
            data: null,
        };
    }
};

export const requestIntegrationAuthentication = async (
    service: OAuthServiceType,
    authCode: string,
    redirectUri: string,
): Promise<FetchResponse<boolean>> => {
    try {
        const { data } = await fetch({
            path: getIntegrationAuthenticationPath(service),
            method: 'POST',
            body: {
                code: authCode,
                redirect_uri: redirectUri,
            },
        });
        return data;
    } catch (e) {
        throw handleError(e);
    }
};
