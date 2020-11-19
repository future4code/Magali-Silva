import { Request, Response } from "express";
import { createPostBusiness } from "../../business/post/createPostBusiness";
import { PostInput } from "../../model/Post";


export async function createPost( req: Request, res: Response) {
    try {
        const input: PostInput = {
            photo: req.body.photo,
            description: req.body.description,
            type: req.body.type
        }

        const userToken: string = req.headers.authorization as string
        const tokenPost = await createPostBusiness(input, userToken);

        res
            .status(201)
            .send({
               message:"post created successfully",
               tokenPost
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}