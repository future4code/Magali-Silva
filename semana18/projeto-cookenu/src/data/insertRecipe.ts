import { connection } from '../index'
import { Recipe } from '../type';

export async function insertRecipe(recipe: Recipe): Promise<void> {
    try { 
        const {id, user_id, title, description, createdAt } = recipe
        
        await connection('cookenu_recipes')
        .insert({
            id,
            user_id,
            title,
            description,
            createdAt
        })
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}