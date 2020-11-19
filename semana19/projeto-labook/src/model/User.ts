export type AuthenticationData = {
    id: string
}

export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type UserInput = {
    name: string,
    email: string,
    password: string
}

export type UserLoginInput = {
    email: string,
    password: string
}