import {connection} from '../index'

export async function countActorByGender(gender: string): Promise<any> {
    try {
        const result = await connection.raw(`
            SELECT COUNT(*) as count FROM Actor WHERE gender="${gender}"
        `)
        console.log(result)
        const count = result[0][0].count;
        return count
    } catch (error) {
        console.log(error)
    }
}