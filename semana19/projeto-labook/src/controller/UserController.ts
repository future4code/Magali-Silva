import { Request, Response } from "express"
import { CreateUserInput, UserLoginInput } from "../model/User";
import UserBusiness from "../business/UserBusiness";

class UserController {

    public async signup( req: Request, res: Response) {
        try {
            const input: CreateUserInput = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
    
           const token = await UserBusiness.signup(input)
    
            res
                .status(201)
                .send({
                   message:"User created successfully",
                   token
                })
    
        } catch (error) {
            res.status(400).send({
                message: error.message || error.sqlMessage
            })
        }
    }

    public async login( req: Request, res: Response) {
        try {
            const input: UserLoginInput = {
                email: req.body.email,
                password: req.body.password
            }
    
           const token = await UserBusiness.login(input);
    
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

}

export default new UserController()