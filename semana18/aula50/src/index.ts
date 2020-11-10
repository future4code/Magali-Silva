import knex from 'knex'
import express, { Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { AddressInfo } from 'net'
import { createUser } from './endpoints/createUser'
import { login } from './endpoints/login'

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME
    },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post('/users/signup', createUser)
app.post('/users/login', login)





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
