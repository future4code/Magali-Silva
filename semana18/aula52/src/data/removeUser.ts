import { connection } from '..'

export async function removeUser(
    id: string
): Promise<any> {
    try {
        await connection('aula50_users')
        .delete()
        .where("id", id);
        
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
};