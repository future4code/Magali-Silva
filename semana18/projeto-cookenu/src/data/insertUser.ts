import { connection } from '../index'
import { User } from '../type';

export async function insertUser(user: User): Promise<void> {
    try { 
        const {id, name, email, password} = user
        
        await connection('cookenu_users')
        .insert({
            id,
            name,
            email,
            password
        })
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}