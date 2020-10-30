import {connection} from '../index'

export async function createUser(
        name: string,
        nickname: string,
        email: string
    ): Promise<void> {
    try {
        const result = await connection.raw(`
            INSERT INTO ToDoListUsers (name, nickname, email) 
            VALUES ("${name}", "${nickname}", "${email}")
        `)

        console.log(result[0])

    } catch (error) {
        console.log(error)
    }
}