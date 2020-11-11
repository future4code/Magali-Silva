import { connection } from '..'
import { USER_ROLES } from '../types'

export async function insertUser(
    id: string,
    email: string,
    password: string, 
    role: USER_ROLES
): Promise<void> {
    try {
        await connection('aula50_users')
        .insert({
            id: id,
            email: email,
            password: password,
            role
        })
        
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
};