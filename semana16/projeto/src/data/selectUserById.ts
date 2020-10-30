import {connection} from '../index'

export async function selectUserById(
    id:string
    ): Promise<any> {
    try {
        const result = await connection.raw(`
            SELECT id, nickname FROM ToDoListUsers WHERE id="${id}"
        `)
        console.log(result[0] [0])
        console.log(result[0])

        return result[0]
    } catch (error) {
        console.log(error)
    }
}