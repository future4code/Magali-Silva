import { Request, Response } from "express"
import { AuthenticationData, User } from "../type"
import { getTokenData } from "../service/generateToken"
import { selectUserById } from "../data/selectUserById"

export const getUser = async(req: Request, res: Response) => {
    try {
        let message: string = 'Profile found'

        const id: string = req.params.id as string

        const token = req.headers.authorization as string
        getTokenData(token)

        const user: User = await selectUserById(id)

        if (!user) {
            res.statusCode = 404
            message = 'Profile not found'
            throw new Error(message)
        }

        res.status(200).send({
            message: message,
            id: user.id,
            name: user.name,
            email: user.email
        })

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}