import {Response, Request} from 'express'
import { filterUsersByType } from '../data/filterUsersByType'

export const searchUsersByType = async (req: Request, res: Response) => {
    try {
        const type = req.params.type as string

        if (type !== "Teacher" && type !== "CX" && type !== "Operations") {
            throw new Error('Você deve inserir um valor válido para "type"')
        }

        const users = await filterUsersByType(type)

        if (!users.length) {
            res.statusCode = 404;
            throw new Error("Nenhum usuário encontrado")
        }
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}