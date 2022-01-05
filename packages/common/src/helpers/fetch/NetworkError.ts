import { ErrorResponse } from './ErrorResponse';
import { FetchError } from './FetchError';
import { AxiosError } from 'axios';

export class NetworkError extends FetchError {
    constructor(errorDetails: AxiosError) {
        super();

        this.errorDetails = errorDetails;
        this.errorType = FetchError.NETWORK_ERROR;

        this.errorResponse = new ErrorResponse(
            'Network Error',
            `Please check your connection or contact support`,
            FetchError.NETWORK_ERROR,
        );
    }
}
