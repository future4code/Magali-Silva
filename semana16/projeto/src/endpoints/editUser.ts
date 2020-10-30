import { Request, Response } from 'express'
import { updateUser } from '../data/updateUser';

export const editUser = async (req: Request, res: Response) => {
    // fazer validações

    try {
        const { name, nickname } = req.body

        const user = await updateUser(
            req.params.id,
            name,
            nickname
        );

    } catch (error) {
        console.log(error)
        res.status(400).send({ message: error })
    }
}