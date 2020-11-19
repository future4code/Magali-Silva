import { connection } from "../connection";
import { User } from "../../model/User";

export default async function insertUser(
    user: User
) {
    const {id, name, email, password} = user

    try{
        await connection('labook_users')
            .insert({
                id,
                name,
                email,
                password
            })
    }catch(error){
        throw new Error(error.sqlMessage || error.message);
    }
}