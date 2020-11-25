import { Request, Response } from 'express'
import { createActor } from '../data/createActor'


export const createNewActor = async (req: Request, res: Response) => {
    try {
        await createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            new Date(req.body.dateOfBirth),
            req.body.gender
        );

        res.status(200).send()
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}