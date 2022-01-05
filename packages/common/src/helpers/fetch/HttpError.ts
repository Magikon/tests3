import { ErrorResponse } from './ErrorResponse';
import { FetchError } from './FetchError';
import { AxiosError } from 'axios';

const httpStatusToTitle = (status: number): string => {
    switch (status) {
        case 401:
            return 'Not authenticated';
        case 403:
            return 'Restricted action';
        case 404:
            return 'Not found';
        case 407:
            return 'Not authorized (proxy)';
        case 413:
            return 'Request too large';
        case 503:
            return 'Temporarily unavailable';
        case 504:
            return 'Timeout';
        default:
            break;
    }
    if (Math.floor(status / 100) === 5) {
        return 'Server error';
    } else if (Math.floor(status / 100) === 4) {
        return 'Invalid request';
    } else {
        return 'Unhandled Error';
    }
};

/** Error response. */
export class HttpError extends FetchError {
    constructor(errorDetails: AxiosError) {
        super();

        this.errorType = FetchError.HTTP_ERROR;

        const { response } = errorDetails;
        if (response) {
            this.errorResponse = new ErrorResponse(httpStatusToTitle(response.status), response.data, response.status);
        }
    }
}
