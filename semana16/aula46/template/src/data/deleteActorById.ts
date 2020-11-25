import {connection} from '../index'

export async function deleteActorById(
        id: string
    ): Promise<void> {
    try {
        await connection("Actor")
        .delete()
        .where({
            id: id
        })

    } catch (error) {
        console.log(error)
    }
}