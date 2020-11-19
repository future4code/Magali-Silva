
import { Post } from "../../model/Post";
import selectPostById from "../../data/post/selectPostById";

export const getPostByIdBusiness = async (id: string): Promise<Post> => {
    try {
        if (!id) {
            throw new Error('"id" must be provided')
        }

        const post: Post = await selectPostById(id)

        if (!post) {
            throw new Error("Post not found")
        }

        const result = {
            id: post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            createdAt: post.createdAt,
            authorId: post.authorId
        }

        return result

    } catch (error) {
        let message = error.sqlMessage || error.message
        return message
    }
}