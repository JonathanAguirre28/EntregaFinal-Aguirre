export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
}

export interface CreateUserData {
    name: string;
    surname: string;
    email: string;
    password: string;
}

export interface updateUserdata {
    name?: string;
    surname?: string;
    email?: string;
    password?: string;
}