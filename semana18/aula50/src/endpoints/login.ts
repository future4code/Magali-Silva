import { Request, Response } from 'express'
import { generateToken } from '../service/authenticator'
import { User } from '../types'
import { selectUserByEmail } from '../data/selectUserByEmail'

export const login = async (req: Request, res: Response) => {
    try {
        
        const {email, password} = req.body
        let message: string = 'user is loged and token generated by jwt'

        if (!email || !password) {
            res.statusCode = 406
            message = 'Missing "email" and/or "password"'
            throw new Error(message)
        }

        if (!email.includes('@')) {
            message = 'missing "@" in the email'
            throw new Error(message)
        }

        const user: User | undefined = await selectUserByEmail(email)

        if (!user) {
            res.statusCode = 404
            message = 'user not found or wrong email/password'
            throw new Error(message)
        }

        if (user.password !== password) {
            res.statusCode = 404
            message = 'user not found or wrong email/password'
            throw new Error(message)
        }
        
        const token: string = generateToken({
            id: user.id
        })

        res.status(200).send({ message: message,
        token: token })
        
    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}