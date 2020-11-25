//importando express com Request e Response e cors
import express, { Request, Response } from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

enum typeUser {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

type User = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number 
}

let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: typeUser.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: typeUser.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: typeUser.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: typeUser.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: typeUser.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: typeUser.ADMIN,
        age: 60
    }
]

// EXERCÍCIO 1
// a) Qual método HTTP você deve utilizar para isso? 
// Método GET

// b) Como você indicaria a entidade que está sendo manipulada?
// A entidade manipulada é indicada através do path do endpoint, sendo essa "/users"
app.get("/users", (req: Request, res: Response): void => {

    try {
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});


// EXERCÍCIO 2
// a) Como você passou os parâmetros de type para a requisição? Por quê?
// Os parâmetros de type foram passadoas para a requisição através de PathParams, porque tratam-se de valores específicos, buscando assim pelos tipos "ADMIN" e "NORMAL"

// b) Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
// Utilizando a estrtura enum que definirá os possíveis tipos aceitos
app.get("/users/:type", (req: Request, res: Response): void => {
    try {

        if (!(req.params.type.toLocaleUpperCase() in typeUser)) {
            throw new Error()
        }

        const usersByType = users.filter((user) => user.type === req.params.type
        )
        res.status(200).send(usersByType);
    } catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});


// EXERCÍCIO 3
// a) Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
// Query por permitir uma busca livre

// b) Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
app.get("/users/query", (req: Request, res: Response): void => {
    const name = req.query.name

    try {
        const user = users.filter((u) => u.name === name)
        
        if (!user) {
            throw new Error()
        }

        res.status(200).send(user);

    } catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});


// EXERCÍCIO 4
// a) Mude o método do endpoint para PUT. O que mudou? 
// Aparentemente sem mudanças

// b) Você considera o método PUT apropriado para esta transação? Por quê? 
// Não, porque o post é o método usual para criação de algo novo
app.post("/users", (req: Request, res: Response): void => {
    try {
        const { id, name, email, age, type } = req.body;
        const user = {
            id: id,
            name: name,
            email: email,
            age: age,
            type: type
        }

        users.push(user);
        res.status(200).send({ message: "User created successfully" });
    } catch (error) {
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})

app.put("/users", (req: Request, res: Response): void => {
    try {
        const { id, name, email, age, type } = req.body;
        const user = {
            id: id,
            name: name,
            email: email,
            age: age,
            type: type
        }

        users.push(user);
        res.status(200).send({ message: "User created successfully" });
    } catch (error) {
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
