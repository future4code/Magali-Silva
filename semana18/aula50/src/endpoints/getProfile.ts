import { Request, Response } from 'express'
import { getTokenData } from '../service/authenticator'
import { AuthenticationData } from '../types'
import { selectUserById } from '../data/selectUserById'

export const getProfile = async (req: Request, res: Response) => {
    try {
        let message: string = 'user found'

        const token = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)
        
        const user = await selectUserById(tokenData.id)

        if (!user) {
            res.statusCode = 404
            message = 'user not found'
            throw new Error(message)
        }
        
        res.status(200).send({ 
            message,
            id: user.id,
            email: user.email
        })

    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}