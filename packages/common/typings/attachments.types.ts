export enum CONTENT_TYPE {
    PNG = 'image/png',
    JPEG = 'image/jpeg',
}

export interface IAttachment {
    type: string;
    file_name: string;
    filename: string;
    url: string;
    content_type: CONTENT_TYPE;
}

export interface IMessageAttachment {
    id: string;
    type: string;
    filename: string;
    size?: number;
    url: string;
}
