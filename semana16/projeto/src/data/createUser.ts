import { connection } from '../index'

export async function createUser(
    id: string,
    name: string,
    nickname: string,
    email: string
): Promise<void> {
    try {
        await connection.raw(`
            INSERT INTO ToDoListUsers (id, name, nickname, email) 
            VALUES ("${id}", "${name}", "${nickname}", "${email}")
        `)

        console.log("Sucesso ao adicionar usuário.")

    } catch (error) {
        console.log(error)
    }
}