import axios from 'axios'
import { Address } from '../types'

const ADDRESS_URL = 'https://viacep.com.br/ws'

export async function getAddressByCEP(CEP: number): Promise<Address> {
    const result = await axios.get(`${ADDRESS_URL}/${CEP}/json`)

    return {
        logradouro: result.data.logradouro,
        bairro: result.data.bairro,
        cidade: result.data.localidade,
        estado: result.data.uf
    }
}