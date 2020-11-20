export interface CreateUserInput {
    name: string,
    email: string,
    password: string
}

export type UserLoginInput = {
    email: string,
    password: string
}

// export type User = {
//     id: string,
//     name: string,
//     email: string,
//     password: string
// }

export class User {

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ){}

    public getId = (): string => this.id
    public getName = (): string => this.name
    public getEmail = (): string => this.email
    public getPassword = (): string => this.password

    public setName(newName: string){
        this.name = newName
        return this
    }
}