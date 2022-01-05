import { AxiosResponse } from 'axios';

/** Successful response. */
export class FetchResponse<T> {
    public data: T;

    constructor(axiosResponse: AxiosResponse | { data: T }) {
        this.data = axiosResponse.data;
    }
}
