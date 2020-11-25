import { User } from "../model/User";
import UserDatabase from "../data/UserDatabase";
import idGenerator from "../services/idGenerator";
import hashManager from "../services/hashManager";
import authenticator from "../services/authenticator";


class UserBusiness {
    public async signup(input: any): Promise<string> {
        try {
            const {name, email, password} = input

            if (
                !name ||
                !email ||
                !password
            ) {
                throw new Error('"name", "email" and "password" must be provided')
                
            }
    
            const id: string = idGenerator.generateId()

            const cypherPassword = await hashManager.hash(password);
    
            const newUser: User = new User(
                id,
                name,
                email,
                cypherPassword
            )

            await UserDatabase.signup(newUser)
    
            const token: string = authenticator.generateToken({
                id
            });
    
            return token;
    
        } catch (error) {
            let message = error.sqlMessage || error.message
            return message
        }
        return "";
    }

    public async login(input: any): Promise<string> {
        try {
            const { email, password } = input

            if (!email || !password) {
                throw new Error('"email" and "password" must be provided')
            }
    
            const user: User = await UserDatabase.getUserByEmail(email)
    
            if (!user) {
                throw new Error("User not found")
            }
    
            const passwordIsCorrect: boolean = await hashManager.compare(password, user.getPassword())
    
            if (!passwordIsCorrect) {
                throw new Error("Invalid credentials")
            }
    
            const id: string = user.getId()
            const token: string = authenticator.generateToken({
                id
            })
    
            return token
    
        } catch (error) {
            let message = error.sqlMessage || error.message
            return message
        }
    }
}

export default new UserBusiness()