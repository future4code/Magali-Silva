import {Request, Response} from 'express'

export const createUser = async (req:Request, res:Response) => {
    try {
        const {email, password} = req.body

        res.status(200).send({ message: "Usuário criado com sucesso." })
    } catch (error) {
        res.status(400).send({ message: error })
    }
}