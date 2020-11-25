import { Request, Response } from 'express'
import { Actor } from '../types'
import { selectActorById } from '../data/selectActorById'


export const getActorById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor: Actor = await selectActorById(id)

        res.status(200).send(actor)
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}