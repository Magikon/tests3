import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { FetchResponse } from './FetchResponse';

export interface IHttpClientOptions {
    onRequestInterceptor?: any;

    onResponseInterceptor?: (response: AxiosResponse) => Promise<any>;

    onResponseErrorInterceptor?: (error: AxiosError) => any;

    host: string;

    tokenFnAsync: () => Promise<string>;
}

export interface IFetchOptions {
    path: string;
    method?: Method;
    body?: any;
    headers?: any;
    noAuth?: boolean;
    absolute?: boolean;
    params?: any;
}

export class HttpClient {
    private _pendingRequests: any[] = [];

    private readonly _reqInterceptor: number | undefined;
    private readonly _resInterceptor: number | undefined;

    public host: string;
    public tokenFnAsync: () => Promise<string>;

    constructor(options: IHttpClientOptions) {
        const { host, tokenFnAsync, onRequestInterceptor, onResponseInterceptor, onResponseErrorInterceptor } = options;

        this.host = host;
        this.tokenFnAsync = tokenFnAsync;

        if (onRequestInterceptor) {
            // hot reload issue
            if (this._reqInterceptor || this._reqInterceptor === 0) {
                axios.interceptors.request.eject(this._reqInterceptor);
            }

            // Add a request interceptor
            this._reqInterceptor = axios.interceptors.request.use(onRequestInterceptor);
        }

        if (onResponseInterceptor || onResponseErrorInterceptor) {
            // hot reload issue
            if (this._resInterceptor || this._resInterceptor === 0) {
                axios.interceptors.response.eject(this._resInterceptor);
            }

            // Add a request interceptor
            this._resInterceptor = axios.interceptors.response.use(
                onResponseInterceptor,
                onResponseErrorInterceptor,
            );
        }
    }

    public async fetch<T = any>({
        path,
        body,
        method = 'GET',
        noAuth = false,
        headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        params,
        absolute = false,
    }: IFetchOptions): Promise<FetchResponse<T> | never> {
        const curToken = axios.CancelToken.source();
        const cToken = curToken.token;

        let url = path;
        if (!absolute) {
            url = this.host + path;
        }

        const config: AxiosRequestConfig = {
            method,
            url,
            cancelToken: cToken,
        };

        if (noAuth === false) {
            const token = await this.tokenFnAsync();
            headers.Authorization = `Bearer ${token}`;
        }

        config.headers = headers;

        if (method === 'GET') {
            config.params = body;
        } else {
            config.data = body;
            config.params = params;
        }

        try {
            this._pendingRequests.push(curToken);
            return await axios(config);
        } catch (e) {
            throw e;
        } finally {
            // Remove request
            const index = this._pendingRequests.findIndex((item) => item.token === cToken);
            if (index > -1) {
                this._pendingRequests.splice(index, 1);
            }
        }
    }

}
