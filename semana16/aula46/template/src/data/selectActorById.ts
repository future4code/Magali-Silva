import {connection} from '../index'

export async function selectActorById(id: string): Promise<any> {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE id="${id}"
        `)
        console.log(result[0] [0])

        return result[0] [0]
    } catch (error) {
        console.log(error) 
    }
}

// 1. a) Usando o *raw* recebemos como resposta um array contento: um array com os dados da tabela e um array com informações sobre a tabela
