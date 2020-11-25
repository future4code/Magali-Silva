import { connection } from '../index'

export async function updateUser(
    id: string,
    name?: string,
    nickname?: string,
    email?: string
): Promise<any> {

    if (name) {
        await connection.raw(`
            UPDATE ToDoListUsers
            SET name="${name}"
            WHERE id="${id}";
        `)
    }

    if (nickname) {
        await connection.raw(`
            UPDATE ToDoListUsers
            SET name="${nickname}"
            WHERE id="${id}";
        `)
    }

    if (email) {
        await connection.raw(`
            UPDATE ToDoListUsers
            SET name="${email}"
            WHERE id="${id}";
        `)
    }
}