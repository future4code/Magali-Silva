import { Request, Response } from 'express'
import { deleteActorById } from '../data/deleteActorById';

export const deleteActor = async (req: Request, res: Response) => {
    try {
        await deleteActorById(req.params.id);

        res.status(200).send()
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}