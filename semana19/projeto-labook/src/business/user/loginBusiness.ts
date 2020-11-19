import { compare } from "../../services/hashGenerator";
import { generateToken } from "../../services/authenticator";
import { User } from "../../model/User";
import selectUserByEmail from "../../data/user/selectUserByEmail";

export const loginBusiness = async (input: any): Promise<string> => {
    try {
        if (!input.email || !input.password) {
            throw new Error('"email" and "password" must be provided')
        }

        const user: User = await selectUserByEmail(input.email)

        if (!user) {
            throw new Error("User not found")
        }

        const passwordIsCorrect: boolean = await compare(input.password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Invalid credentials")
        }

        const token: string = generateToken({
            id: user.id
        })

        return (token)

    } catch (error) {
        let message = error.sqlMessage || error.message
        return message
    }
}