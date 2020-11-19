import { Request, Response } from "express";
import { getPostByIdBusiness } from "../../business/post/getPostByIdBusiness";

export async function getPostById( req: Request, res: Response) {
    try {
        const id  = req.params.id

       const post = await getPostByIdBusiness(id);

        res
            .status(201)
            .send({
               message:"Success!",
               post
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}