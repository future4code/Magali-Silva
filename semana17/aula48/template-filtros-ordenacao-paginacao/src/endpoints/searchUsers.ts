import {Response, Request} from 'express'

export const searchUsers = async (req: Request, res: Response) => {
    try {
        const title = req.query.title

        if (!title) {
            
        }
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}