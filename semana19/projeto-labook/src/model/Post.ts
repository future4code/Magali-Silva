export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export class Post {

    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private createdAt: Date,
        private authorId: string
    ){}
    
    public getId = () => this.id
    public getPhoto = () => this.photo
    public getDescription = () => this.description
    public getType = () => this.type
    public getCreatedAt = () => this.createdAt
    public getAuthorId = () => this.authorId

}

export interface PostInput {
    photo: string,
    description: string,
    type: POST_TYPES
}