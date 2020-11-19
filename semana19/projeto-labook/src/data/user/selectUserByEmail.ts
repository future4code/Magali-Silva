import { connection } from "../connection";
import { User } from "../../model/User";

export default async function selectUserByEmail(
    email: string
): Promise<User> {
    try {
        const queryResult: any = await connection("labook_users")
            .select("*")
            .where({email})

        if (!queryResult[0]) {
            throw new Error("Invalid credentials")
        }

        const user: User = {
            id: queryResult[0].id,
            name: queryResult[0].name,
            email: queryResult[0].email,
            password: queryResult[0].password
        }

        return user
    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
}