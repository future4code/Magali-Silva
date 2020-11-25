import { Request, Response } from 'express'
import { Actor } from '../types'
import { selectActorByName } from '../data/selectActorByName';

export const searchActorByName = async (req: Request, res: Response) => {
    const name = String(req.params.name) // tentar com query
    try {
        const actors: Actor[] = await selectActorByName(name) 

        if (actors.length === 0) {
            res.statusCode = 404
            throw new Error();
        }

        res.status(200).send(actors)
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}


