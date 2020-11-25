import { connection } from '..'
import { Address } from '../types'

export async function insertAddress(
    id: string,
    numero: number,
    complemento: string | undefined,
    userAddress: Address  
): Promise<void> {
    try {
        await connection('aula50_52_user_address')
        .insert({
            user_id: id,
            numero,
            complemento,
            logradouro: userAddress.logradouro,
            bairro: userAddress.bairro,
            cidade: userAddress.cidade,
            estado: userAddress.estado
        })
        
        
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
};