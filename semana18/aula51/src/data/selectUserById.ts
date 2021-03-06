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
            id: result[0].id,
            email: result[0].email,
            password: result[0].password,
            role: result[0].role
        }
        
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
};