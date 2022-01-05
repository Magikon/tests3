import { ErrorResponse } from './ErrorResponse';
import { AxiosError } from 'axios';

type ErrorType = 'httpError' | 'networkError';

export class FetchError {
    static HTTP_ERROR: ErrorType = 'httpError';
    static NETWORK_ERROR: ErrorType = 'networkError';

    isFetchError: boolean = true;

    errorDetails: AxiosError;

    errorType: ErrorType;

    errorResponse: ErrorResponse;

    get message(): string {
        return this.errorDetails.message;
    }

    get isHttpError(): boolean {
        return this.errorType === FetchError.HTTP_ERROR;
    }

    get isNetworkError(): boolean {
        return this.errorType === FetchError.NETWORK_ERROR;
    }

    get httpStatus(): number {
        return this.errorDetails.response?.status ? this.errorDetails.response.status : -1;
    }
}
