import express, {  Express } from 'express'
import cors from 'cors'
import { Extract, userAccount, users } from './users'

const app: Express = express()

app.use(express.json())
app.use(cors())





app.listen(3003, () => {
    console.log("Servidor pronto!")
})