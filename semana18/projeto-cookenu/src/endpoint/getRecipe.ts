import { Request, Response } from "express"
import { Recipe } from "../type"
import { getTokenData } from "../service/generateToken"
import { selectRecipeById } from "../data/selectRecipeById"
import { formatDate } from "../functions/handleDate"

export const getRecipe = async(req: Request, res: Response) => {
    try {
        let message: string = 'Recipe found'

        const id: string = req.params.id as string

        const token = req.headers.authorization as string
        getTokenData(token)

        const recipe: Recipe = await selectRecipeById(id)

        if (!recipe) {
            res.statusCode = 404
            message = 'Recipe not found'
            throw new Error(message)
        }

        const date = formatDate(recipe.createdAt)

        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: date
        })

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}