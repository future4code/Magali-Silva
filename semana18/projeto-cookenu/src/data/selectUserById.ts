import { User } from "../type";
import { connection } from "..";


export async function selectUserById(
    id: string
): Promise<User> {
    try {
        const result = await connection('cookenu_users')
        .select("*")
        .where({id})

        return {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            password: result[0].email
        }
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}