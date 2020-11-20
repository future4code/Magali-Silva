import BaseDatabase from './BaseDatabase'
import { Post } from '../model/Post';

class PostDatabase extends BaseDatabase {

    private static tableName: string = 'labook_users'

    public async createPost(
        post: Post
    ) {

        try {
            await BaseDatabase.connection(PostDatabase.tableName)
                .insert({
                    id: post.getId(),
                    photo: post.getPhoto(),
                    description: post.getDescription(),
                    type: post.getType(),
                    createdAt: post.getCreatedAt(),
                    author_id: post.getAuthorId()
                })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async selectPostById(
        id: string
    ): Promise<Post> {
        try {
            const queryResult = await BaseDatabase.connection(PostDatabase.tableName)
                .select("*")
                .where({ id })

            return queryResult[0]

        } catch (error) {
            throw new Error(error.slqMessage || error.message)
        }
    }
}

export default new PostDatabase()