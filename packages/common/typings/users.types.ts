export interface IUser {
    email?: string;
    name: string;
    nickname?: string;
    picture?: string;
    id: string;
    last_login: string;
    app_metadata?: IUserAppMetadata;
    user_metadata?: IUserMetadata;
    role?: string;
    phone_number?: string;
}

export interface IUserInvite {
    phone_number?: string;
    email?: string;
}

export interface IUsersGetFilters {
    q?: string;
    per_page?: number;
}

export interface IUserMetadata {
    user_roles?: string[];
    user_trades?: string[];
    onboarding_passed?: boolean | string;
    new_hivot_gotten?: string;
    add_job_gotten?: string;
    invite_friend_gotten?: string;
    invite_hotlink?: string;
    new_hivot_hotlink?: string;
    add_job_hotlink?: string;
    username_hotlink?: string;
}

export interface IUserAppMetadata {
    invite_count: number;
}

export interface IProfile extends IUser {
    given_name: string;
    family_name: string;
}

export interface IPendingInvitation {
    id: string;
    phone_number: string;
    picture?: string;
}

export interface IUserInviteResponse {
    status: string;
    value: {
        phone_number: string;
        user_metadata?: object;
    };
}
