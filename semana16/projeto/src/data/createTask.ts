import { connection } from '../index'

export async function createTask(
    id: string,
    title: string,
    description: string,
    deadline: string,
    authorId: string
): Promise<void> {
    try {
        await connection.raw(`
            INSERT INTO ToDoListTasks (id, title, description, deadline, author_id) 
            VALUES ("${id}", "${title}", "${description}", "${deadline}", "${authorId}")
        `)

        console.log("Sucesso ao adicionar tarefa.")

    } catch (error) {
        console.log(error)
    }
}