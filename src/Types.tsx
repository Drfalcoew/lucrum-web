export interface EmailRecipient {
    recipientEmail: string;
    recipientName: string;
    phoneNumber: string;
    subject: string;
    message: string;
    address: string;
    comments: string;
}

export interface SchedulePropsData {
    fullName: string;
    email: string;
    orderNumber: string;
}