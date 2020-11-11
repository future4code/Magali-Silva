import { Request, Response } from 'express'
import { getTokenData } from '../service/authenticator'
import { AuthenticationData, USER_ROLES } from '../types'
import { removeUser } from '../data/removeUser'

export const deleteUser = async (req: Request, res: Response) => {
    try {
        let message: string = 'user deleted'

        const token = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)
        const id: string = req.params.id as string

        if (tokenData.role !== USER_ROLES.ADMIN) {
            message = 'only "ADMIN" user can access functionality'
            throw new Error(message)
        }

        await removeUser(id)
        
        res.status(200).send({ 
            message
        })

    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}