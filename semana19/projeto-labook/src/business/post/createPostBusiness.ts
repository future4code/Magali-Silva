import { compare } from "../../services/hashGenerator";
import { generateToken, getTokenData } from "../../services/authenticator";
import { POST_TYPES, Post, PostInput } from "../../model/Post";
import insertPost from "../../data/post/insertPost";
import { generateId } from "../../services/idGenerator";
import { AuthenticationData } from "../../model/User";

export const createPostBusiness = async (input: PostInput, userToken: any): Promise<string> => {
    try {

        const { photo, description, type } = input

        if (!photo || !description) {
            throw new Error('"photo" and "description" must be provided')
        }

        const tokenData: AuthenticationData = getTokenData(userToken)
        console.log(tokenData)
        console.log(userToken)

        const id: string = generateId()

        await insertPost({
            id,
            photo,
            description,
            type,
            createdAt: new Date,
            authorId: tokenData.id
        })

        const token: string = generateToken({
            id
        });
        console.log(token)
        return token;

    } catch (error) {
        let message = error.sqlMessage || error.message
        return message
    }
}