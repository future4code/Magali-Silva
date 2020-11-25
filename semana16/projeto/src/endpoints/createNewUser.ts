import { Request, Response } from 'express'
import { createUser } from '../data/createUser'

export const createNewUser = async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            res.status(400).send({ message: "Todos os campos devem ser preenchidos." })
            return
        }

        const id: string = Date.now() + Math.random().toString()

        await createUser(id, name, nickname, email);

        res.status(200).send({ message: "Usuário criado com sucesso." })
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: error })
    }
}