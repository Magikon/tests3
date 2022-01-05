export interface IFIlePayload {
    namespace: string;
    name: string;
    type: string;
    size: number;
}

export interface IFileResponse {
    id: string;
    url: string;
    form: {
        url: string;
        fields: any;
    };
    filename: string;
    read_url: string;
}

export interface IFileDownloadResponse {
    url: string;
}
