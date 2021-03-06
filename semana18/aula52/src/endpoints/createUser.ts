import { Request, Response } from 'express'
import { generateId } from '../service/idGenerator'
import { insertUser } from '../data/insertUser'
import { generateToken } from '../service/authenticator'
import { hash } from '../service/generateHash'
import { getAddressByCEP } from '../service/getAddressByCEP'
import { insertAddress } from '../data/insertAddress'

export const createUser = async (req: Request, res: Response) => {
    try {
        const { email, password, role, CEP, numero, complemento } = req.body
        let message = 'User created and token generated by jwt'

        if (!email || !password || !role || !CEP || !numero) {
            res.statusCode = 406
            message = '"email", "password", "role", "CEP" and "numero" are required'
            throw new Error(message)
        }

        if (!email.includes('@')) {
            message = 'missing "@" in the email'
            throw new Error(message)
        }

        if (password.length < 6) {
            message = 'Password must be at least 6 characters'
            throw new Error(message)
        }

        if (CEP.length < 8) {
            message = 'invalid CEP'
            throw new Error(message)
        }

        const id: string = generateId()
        const cypherPassword: string = await hash(password)

        const {logradouro, bairro, cidade, estado} = await getAddressByCEP(CEP)

        if (!logradouro || !bairro || !cidade || !estado) {
            throw new Error('invalid CEP')
        }

        await insertUser({
            id,
            email,
            password: cypherPassword,
            role
        })

        await insertAddress(
            id,
            numero,
            complemento,
            {
                logradouro,
                bairro,
                cidade,
                estado
            }  
        )

        const token: string = generateToken({
            id,
            role
        })

        res.status(200).send({
            message: message,
            token: token
        })
    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}