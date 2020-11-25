import { Recipe } from "../type";
import { connection } from "..";

export async function selectRecipeById(
    id: string
): Promise<Recipe> {
    try {
        const result = await connection('cookenu_recipes')
        .select("*")
        .where({id})

        return {
            id: result[0].id,
            user_id: result[0].user_id,
            title: result[0].title,
            description: result[0].description,
            createdAt: result[0].createdAt
        }
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}