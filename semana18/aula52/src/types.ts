export type User = {
    id: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export type AuthenticationData = {
    id: string,
    role: USER_ROLES
}

export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

export type Address = {
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string
}