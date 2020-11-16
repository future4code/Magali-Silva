import { connection } from "../connection";
import { User } from "../../types";

export default async function insertUser(
    user: User
) {
    const {id, name, email, password, role} = user

    try{
        await connection('User_Arq')
            .insert({
                id,
                name,
                email,
                password,
                role
            })
    }catch(error){
        throw new Error("Erro de banco de dados: " + error.sqlMessage);
    }
}

