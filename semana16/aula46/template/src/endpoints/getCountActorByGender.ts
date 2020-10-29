import { Request, Response } from 'express'
import { countActorByGender } from '../data/countActorsByGender';


export const getCountActorByGender = async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender;
        const countActors: number = await countActorByGender(gender as string)
        
        console.log(countActors)
        res.status(200).send({quantity: countActors})
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}