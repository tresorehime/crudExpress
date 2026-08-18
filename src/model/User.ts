export interface User {
    id: string;
    email: string;
    password: string;
}


export interface CreateUser {
    email: string;
    password: string;
}