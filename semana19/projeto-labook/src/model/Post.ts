export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export class Post {
    private type: POST_TYPES

    constructor(
        private id: string,
        private photo: string,
        private description: string,
        type: string,
        private createdAt: string,
        private authorId: string
    ){
        if (type.toLowerCase() === POST_TYPES.EVENT) {
            this.type = POST_TYPES.EVENT
        } else if (type.toLowerCase() === POST_TYPES.NORMAL) {
            this.type = POST_TYPES.NORMAL
        } else {
            throw new Error('invalid post "type"')
        }
    }
    
    public getId = (): string => this.id
    public getPhoto = (): string => this.photo
    public getDescription = (): string => this.description
    public getType = (): POST_TYPES => this.type
    public getCreatedAt = (): string => this.createdAt
    public getAuthorId = (): string => this.authorId

}

export interface PostInput {
    photo: string,
    description: string,
    type: POST_TYPES
}

export interface getPost {
    id: string,
    token: string
}