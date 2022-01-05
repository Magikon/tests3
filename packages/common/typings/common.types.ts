export interface IBreadcrumb {
    name: string;
    value: string;
    type: 'personal' | 'job' | 'thread';
}

export type OrderDirection = 'ascending' | 'descending' | 'range';

export interface IPagination {
    offset: number;
    limit: number;
}

export interface IConfigs {
    cognito: {
        UserPoolId: string;
        ClientId: string;
    };
    procore: {
        clientId: string;
        authorizeUrl: string;
    };
}

export interface ISuggestion {
    name: string;
    type: 'user' | 'job' | 'tag';
    value: string;
    metadata?: {
        name?: string;
        image?: string;
    };
}

export interface ITag {
    id: string;
    name: string;
    type: string;
    user_id: string;
}
