import knex from 'knex'
import express, {Express} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {AddressInfo} from 'net'
import { signup } from './endpoint/signup'
import { login } from './endpoint/login'
import { getProfile } from './endpoint/getProfile'
import { getUser } from './endpoint/getUser'

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

app.post('/signup', signup)
app.post('/login', login)
app.get('/user/profile', getProfile)
app.get('/user/:id', getUser)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.log(`Failure upon starting server`);
    }
})