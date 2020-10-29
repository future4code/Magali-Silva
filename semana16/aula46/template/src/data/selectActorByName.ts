import {connection} from '../index'

export async function selectActorByName(name: string): Promise<any> {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name LIKE "%${name}%"
        `)
        console.log(result[0])

        return result[0]
    } catch (error) {
        console.log(error)
    }
}
