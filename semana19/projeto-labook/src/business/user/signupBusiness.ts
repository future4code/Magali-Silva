import { generateId } from "../../services/idGenerator";
import { hash } from "../../services/hashGenerator";
import { generateToken } from "../../services/authenticator";
import insertUser from "../../data/user/insertUser";

export const signupBusiness = async (input: any): Promise<string> => {
    try {
        if (
            !input.name ||
            !input.email ||
            !input.password
        ) {
            throw new Error('"name", "email" and "password" must be provided')
            
        }

        const id: string = generateId()

        const cypherPassword = await hash(input.password);

        await insertUser({
            id,
            name: input.name,
            email: input.email,
            password: cypherPassword
        })

        const token: string = generateToken({
            id
        });

        return token;

    } catch (error) {
        if (error.code === 1048) {
            throw new Error("User not found");
        }
    }
    return "";
}