import { connection } from '../index'

export async function selectTaskById(
    id: string
): Promise<any> {
    try {
        const result = await connection.raw(`
            SELECT tasks.*, nickname FROM ToDoListTasks AS tasks
            JOIN ToDoListUsers AS users
            ON author_id = users.id
            WHERE tasks.id="${id}";
        `)

        return result[0][0]
    } catch (error) {
        console.log(error)
    }
}