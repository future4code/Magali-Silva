import {connection} from '../index'

export async function averageSalaryByGender(
        gender: string
    ): Promise<any> {
    try {
        const result = await connection("Actor")
        .avg("salary as average")
        .where({
            gender: gender
        })

        const average = result[0].average
        console.log(average)
        return average

    } catch (error) {
        console.log(error)
    }
}