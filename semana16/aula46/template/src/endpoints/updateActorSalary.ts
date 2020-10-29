import { Request, Response } from 'express'
import { updateSalary } from '../data/updateSalary';


export const updateActorSalary = async (req: Request, res: Response) => {
    try {
        await updateSalary(
            req.body.id,
            req.body.salary,
        );

        res.status(200).send()
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}