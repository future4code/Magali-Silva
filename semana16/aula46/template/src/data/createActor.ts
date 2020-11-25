import {connection} from '../index'

export async function createActor(
        id: string,
        name: string,
        salary: number,
        dateOfBirth: Date,
        gender: string
    ): Promise<void> {
    try {
        await connection
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender
        })
        .into("Actor")

    } catch (error) {
        console.log(error)
    }
}