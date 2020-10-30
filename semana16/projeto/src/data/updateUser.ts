import { connection } from '../index'

export async function updateUser(id:string, name: string, nickname: string): Promise<any> {
    try {
        const result = await connection.raw(`
            UPDATE ToDoListUsers
            SET name="${name}", nickname="${nickname}"
            WHERE id="${id}";
        `)
        console.log(result[0])

        return result[0]
    } catch (error) {
        console.log(error)
    }
}