import { connection } from '..'
import { User } from '../types'

export async function insertUser(
    user: User
): Promise<void> {
    try {
        await connection('aula50_users')
        .insert({
            id: user.id,
            email: user.email,
            password: user.password,
            role: user.role
        })
        
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
};