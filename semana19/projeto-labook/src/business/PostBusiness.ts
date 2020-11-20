import { PostInput, Post } from "../model/Post"
import authenticator, { AuthenticationData } from "../services/authenticator"
import idGenerator from "../services/idGenerator"
import PostDatabase from "../data/PostDatabase"

class PostBusiness {
    public async createPostBusiness(input: PostInput, userToken: string): Promise<string> {
        try {
    
            const { photo, description, type } = input
    
            if (!photo || !description) {
                throw new Error('"photo" and "description" must be provided')
            }
    
            const tokenData: AuthenticationData = authenticator.getTokenData(userToken)
            
            if (!tokenData) {
                throw new Error('unauthorized')
            }

            const id: string = idGenerator.generateId()
    
            const date = new Date()

            const newPost: Post = new Post(
                id,
                photo,
                description,
                type,
                date,
                tokenData.id
            )

            await PostDatabase.createPost(newPost)
    
            const token: string = authenticator.generateToken({
                id
            });

            return token;
    
        } catch (error) {
            let message = error.sqlMessage || error.message
            return message
        }
    }


    public async getPostByIdBusiness(id: string, userToken: string): Promise<Post> {
        try {
            if (!id) {
                throw new Error('"id" must be provided')
            }
    
            const tokenData: AuthenticationData = authenticator.getTokenData(userToken)
            
            if (!tokenData) {
                throw new Error('unauthorized')
            }

            const post: Post = await PostDatabase.selectPostById(id)
    
            if (!post) {
                throw new Error("Post not found")
            }   
    
            return post
    
        } catch (error) {
            let message = error.sqlMessage || error.message
            return message
        }
    }

}

export default new PostBusiness()