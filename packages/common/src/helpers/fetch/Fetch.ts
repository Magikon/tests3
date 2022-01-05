import { HttpClient, IFetchOptions, IHttpClientOptions } from './HttpClient';

let httpClient: HttpClient | null = null;

export function setupFetchService(options: IHttpClientOptions) {
    httpClient = new HttpClient(options);
}

export function fetch({ ...options }: IFetchOptions) {
    if (!httpClient) {
        throw new Error('Please setup fetch service with correct options');
    }
    return httpClient.fetch(options);
}
