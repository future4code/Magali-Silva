import { Request, Response } from 'express'
import { getTokenData } from '../service/authenticator'
import { selectUserById } from '../data/selectUserById'

export const getUser = async (req: Request, res: Response) => {
    try {
        let message: string = 'user found'

        const token = req.headers.authorization as string

        getTokenData(token)
        
        const id: string = req.params.id as string

        const user = await selectUserById(id)

        if (!user) {
            res.statusCode = 404
            message = 'user not found'
            throw new Error(message)
        }
        
        res.status(200).send({ 
            message: {
                id: user.id,
                email: user.email
            }
        })

    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}