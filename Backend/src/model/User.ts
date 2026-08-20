export type Role = 'ADMIN' | 'STUDENT';

export interface User {
    id: string;
    email: string;
    password: string;
}


export interface CreateUser {
    email: string;
    password: string;
}

export interface AuthenticatedUser {
    id: number;
    email: string;
    role: string;
}