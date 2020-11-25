import BaseDatabase from './BaseDatabase'
import { User } from '../model/User';

class UserDatabase extends BaseDatabase {

    private tableName: string = 'labook_users'

    public async signup(user: User) {
        try {
            await BaseDatabase.connection(this.tableName)
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword()
                })
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getUserByEmail(
        email: string
    ): Promise<User> {
        try {
            const queryResult = await BaseDatabase.connection(this.tableName)
                .select("*")
                .where({ email })

            if (!queryResult[0]) {
                throw new Error("Invalid credentials")
            }

            return new User(
                queryResult[0].id,
                queryResult[0].name,
                queryResult[0].email,
                queryResult[0].password
            )

        } catch (error) {
            throw new Error(error.slqMessage || error.message)
        }
    }
}

export default new UserDatabase()