import { Request, Response } from "express";
import { signupBusiness } from "../../business/user/signupBusiness";
import { UserInput } from "../../model/User";


export async function signup( req: Request, res: Response) {
    try {
        const input: UserInput = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

       const token = await signupBusiness(input);

        res
            .status(201)
            .send({
               message:"Success!",
               token
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}