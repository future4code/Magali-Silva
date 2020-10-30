import { Request, Response } from 'express'
import { selectUserById } from '../data/selectUserById'

export const getUserById = async (req: Request, res: Response) => {
    // verificar validações
    if (!req.params.id || req.params.id === "") {
        res.status(400).send({message: "Para buscar usuário, passe um ID."})
    } else {
        try {
            const user = await selectUserById(req.params.id);

            if (user.length > 0) {
                res.status(200).send(user[0])
            } else {
                res.status(200).send({message: "Usuário não encontrado."})
            }
            
        } catch (error) {
            console.log(error)
            res.status(400).send({message: error})
        }
    }
}
