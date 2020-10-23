import express, {  Express, Request, Response } from 'express'
import cors from 'cors'
import { userAccount, users } from './users'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/users", (req: Request, res: Response): void => {
    try {
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({ message: "Error searching for users" });
    }
})

app.post("/users", (req: Request, res: Response): void => {
    try {
        const { id, name, cpf, dateOfBirth, balance, value, date, description } = req.body;

        const user: userAccount = {
            id: id,
            name: name,
            cpf: cpf,
            dateOfBirth: dateOfBirth,
            balance: balance,
            extract: [
                {
                    value: value,
                    date: date,
                    description: description
                }
            ]
        }

        users.push(user)

        res.status(200).send({message: "User created successfully" });
    } catch (error) {
        res.status(400).send({ message: "Error inserting users" });
    }
})


app.listen(3003, () => {
    console.log("Servidor pronto!")
})