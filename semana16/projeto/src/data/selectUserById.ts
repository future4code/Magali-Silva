import { connection } from '../index'

export async function selectUserById(
    id: string
): Promise<any> {
    try {
        const result = await connection.raw(`
            SELECT id, nickname FROM ToDoListUsers WHERE id="${id}"
        `)

        return result[0][0]
    } catch (error) {
        console.log(error)
    }
}