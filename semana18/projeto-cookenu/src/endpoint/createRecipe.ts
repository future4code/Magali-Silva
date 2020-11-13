import {Request, Response} from 'express'
import { generateId } from '../service/generateId'
import { insertRecipe } from '../data/insertRecipe'
import { getTokenData } from '../service/generateToken'
import { handleDate } from '../service/handleDate'

export const createRecipe = async(req: Request, res:Response) => {
    try {
        const { title, description} = req.body
        let message = 'Recipe created'

        if (!title || !description ) {
            res.statusCode = 406
            message = '"title" and "description" are required'
            throw new Error(message)
        }

        const recipeId: string = generateId() as string
        const token: string = req.headers.authorization as string
        const userId = getTokenData(token)

        const date = handleDate()

        await insertRecipe({
            id: recipeId,
            user_id: userId.id,
            title,
            description,
            createdAt: date.nowForDB
        })

        res.status(200).send({
            message: message,
            recipe: {
                id: recipeId,
                user_id: userId.id,
                title,
                description,
                createdAt: date.now
            }
        })

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}