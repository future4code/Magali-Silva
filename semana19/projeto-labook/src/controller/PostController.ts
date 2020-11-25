import { Request, Response } from "express";
import { PostInput, getPost } from "../model/Post";
import PostBusiness from "../business/PostBusiness";


class UserController {
    public async createPost(req: Request, res: Response) {
        try {
            const input: PostInput = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type
            }

            const userToken: string = req.headers.authorization as string
            await PostBusiness.createPostBusiness(input, userToken);

            res
                .status(200)
                .send({
                    message: "post created successfully"
                })

        } catch (error) {
            res.status(400).send({
                message: error.message || error.sqlMessage
            })
        }
    }

    public async getPostById(req: Request, res: Response) {
        try {
            const id: string = req.params.id

            const token: string = req.headers.authorization as string

            const input: getPost = {
                id: id,
                token: token
            }

            const post = await PostBusiness.getPostByIdBusiness(input);

            res
                .status(200)
                .send({
                    message: "post found",
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