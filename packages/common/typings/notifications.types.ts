export type NotificationActionType = {
    id: string;
    text: string;
};

export interface INotification {
    type: string;
    response_action?: string;
    notification_id: string;
    title: string;
    name: string;
    message: string;
    created_at: number;
    picture?: string;
    actions?: NotificationActionType[];
}
