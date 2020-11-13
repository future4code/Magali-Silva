export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type AuthenticationData = {
    id: string
}

export type Recipe = {
    id: string,
    user_id: string,
    title: string,
    description: string,
    createdAt: Date
}