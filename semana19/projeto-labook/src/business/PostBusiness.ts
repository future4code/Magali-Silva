import { PostInput, Post, getPost } from "../model/Post"
import authenticator, { AuthenticationData } from "../services/authenticator"
import idGenerator from "../services/idGenerator"
import PostDatabase from "../data/PostDatabase"
import moment from "moment"

class PostBusiness {
    public async createPostBusiness(input: PostInput, userToken: string): Promise<any> {
        let message = 'post created'
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
   
            const authorId: string = tokenData.id as string
 
            const date = moment().format("YYYY-MM-DD")
          
            const newPost: Post = new Post(
                id,
                photo,
                description,
                type,
                date,
                authorId
            )

            await PostDatabase.createPost(newPost)

            return message

        } catch (error) {
            let message = error.sqlMessage || error.message
            return message
        }
    }


    public async getPostByIdBusiness(input: getPost): Promise<Post> {
        try {
            const { id, token } = input
            
            if (!id) {
                throw new Error('"id" must be provided')
            }

            const tokenData: AuthenticationData = authenticator.getTokenData(token)

            if (!tokenData) {
                throw new Error('unauthorized')
            }

            const post: Post = await PostDatabase.selectPostById(id)

            if (!post) {
                throw new Error("Post not found")
            }
            console.log("post em postBusiness: ", post)

            return post

        } catch (error) {
            let message = error.sqlMessage || error.message
            return message
        }
    }

}

export default new PostBusiness()