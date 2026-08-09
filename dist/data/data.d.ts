export interface User {
    fullName: string;
    email: string;
    password: string;
    role: 'member' | 'trainer';
}
export interface ClassSession {
    title: string;
    trainer: string;
    time_slot: number;
    capcity: number;
}
export interface Booking {
    session_refernce: URL;
    member: User;
    status: 'booked' | 'canceled';
}
//# sourceMappingURL=data.d.ts.map