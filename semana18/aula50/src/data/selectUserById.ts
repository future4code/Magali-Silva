import { connection } from '..'
import { User } from '../types';

export async function selectUserById(
    id: string
): Promise<User> {
    try {
        const result = await connection('aula50_users')
        .select("*")
        .where("id", id);
        
        return {
            id: result[0],
            email: result[0].email,
            password: result[0].password
        }
        
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
};