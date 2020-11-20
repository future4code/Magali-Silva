import { Request, Response } from "express";
import { PostInput } from "../model/Post";
import PostBusiness from "../business/PostBusiness";


class UserController {
    public async createPost( req: Request, res: Response) {
        try {
            const input: PostInput = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type
            }
    
            const userToken: string = req.headers.authorization as string
            const tokenPost = await PostBusiness.createPostBusiness(input, userToken);
    
            res
                .status(200)
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

    public async getPostById( req: Request, res: Response) {
        try {
            const id  = req.params.id
            const userToken: string = req.headers.authorization as string

           const post = await PostBusiness.getPostByIdBusiness(id, userToken);
    
            res
                .status(200)
                .send({
                   message:"post found",
                   post
                })
    
        } catch (error) {
            res.status(400).send({
                message: error.message || error.sqlMessage
            })
        }
    }

}

export default new UserController()