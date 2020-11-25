import {connection} from '../index'

export async function updateSalary(
        id: string,
        newSalary: number
    ): Promise<void> {
    try {
        await connection("Actor")
        .update({
            salary: newSalary
        })
        .where("id", id)
        //.where(``)


    } catch (error) {
        console.log(error) 
    }
}