import { connection } from "../connection";
import { Post } from "../../model/Post";

export default async function insertPost(
    post: Post
) {
    const { id, photo, description, type, authorId } = post

    try {
        await connection("labook_posts")
            .insert({
                id,
                photo,
                description,
                type,
                author_id: authorId
            })
            
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}