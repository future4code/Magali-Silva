import {Response, Request} from 'express'
import { filterUsers } from '../data/filterUsers'

export const searchUsers = async (req: Request, res: Response) => {
    try {
        const name = (req.query.name as string).toLowerCase()

        if (!name) {
            throw new Error('Você deve inserir um valor para "name"')
        }

        const users = await filterUsers(name)

        if (!users.length) {
            res.statusCode = 404;
            throw new Error("Nenhum usuário encontrado")
        }
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}