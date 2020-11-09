import { connection } from '..'

export async function insertUser(
    id: string,
    email: string,
    password: string
): Promise<void> {
    try {
        await connection('aula50_users')
        .insert({
            id,
            email,
            password
        })
        
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
};