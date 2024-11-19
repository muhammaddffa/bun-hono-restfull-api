export type RegisterUserRequest = {
    username: string;
    password: string;
    name: string;
}

export type UserResponse = {
    username: string;
    name: string;
    token: string;
}