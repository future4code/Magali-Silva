import {Request, Response} from 'express'
import { compare } from '../service/generateHash'
import { generateToken } from '../service/generateToken'
import { User } from '../type'
import { selectUserByEmail } from '../data/selectUserByEmail'

export const login = async(req: Request, res:Response) => {
    try {
        const {email, password} = req.body
        let message = 'User is loged'

        if (!email || !password) {
            res.statusCode = 406
            message = '"email" and "password" are required'
            throw new Error(message)
        }

        const user: User = await selectUserByEmail(email)

        if (!user) {
            res.statusCode = 404
            message = 'User not found or wrong email/password'
            throw new Error(message)
        }

        const passwordIsCorrect: boolean = await compare(password, user.password)

        if (!passwordIsCorrect) {
            res.statusCode = 404
            message = 'user not found or wrong email/password'
            throw new Error(message)
        }

        const token: string = generateToken({id: user.id})

        res.status(200).send({
            message: message,
            access_token: token
        })

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}