import { Request, Response } from 'express'
import { updateUser } from '../data/updateUser';

export const editUser = async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body

        if (name === "" || nickname === "" || email === "") {
            res.status(400).send({ message: "Nenhum dos campos pode estar em branco." })
            return
        }

        if (!name && !nickname && !email) {
            res.status(400).send({ message: "Escolha ao menos um valor para alterar" })
            return
        }

        await updateUser(
            req.params.id,
            name,
            nickname,
            email
        );

        res.status(200).send({ message: "Usuário atualizado com sucesso!" })
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: error })
    }
}