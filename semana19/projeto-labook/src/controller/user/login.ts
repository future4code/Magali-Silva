import { Request, Response } from "express";
import { loginBusiness } from "../../business/user/loginBusiness";
import { UserLoginInput } from "../../model/User";

export async function login( req: Request, res: Response) {
    try {
        const input: UserLoginInput = {
            email: req.body.email,
            password: req.body.password
        }

       const token = await loginBusiness(input);

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