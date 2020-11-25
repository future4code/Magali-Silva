import { Request, Response } from 'express'
import { generateId } from '../service/idGenerator'
import { insertUser } from '../data/insertUser'
import { generateToken } from '../service/authenticator'

export const createUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        let message = 'User created and token generated by jwt'

        if (!email || !password) {
            res.statusCode = 406
            message = 'Missing "email" and/or "password"'
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

        const id: string = generateId()

        await insertUser(id, email, password)
        
        const token: string = generateToken({
            id
        })

        res.status(200).send({ message: message,
        token: token })
    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}