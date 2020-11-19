import { connection } from "../connection";
import { Post } from "../../model/Post";

export default async function selectPostById(
    id: string
): Promise<Post> {
    try {
        const queryResult: any = await connection("labook_posts")
            .select("*")
            .where({ id })

        return queryResult[0]
    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
}