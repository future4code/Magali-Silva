import express, { Express, Response, Request } from 'express'
import cors from 'cors'
import { countries, country } from './countries'

const app: Express = express()

app.use(express.json())
app.use(cors())

type GetCountry = {
    id: number,
    name: string
}

app.get("/coutries/all", (req: Request, res: Response) => {
    const result: GetCountry[] = countries.map(country => ({
        id: country.id,
        name: country.name
    }))

    res.status(200).send(result)
})

app.get("/coutries/:id", (req: Request, res: Response) => {

    const result: country | undefined = countries.find(country => country.id === Number(req.params.id))

    if (result) {
        res.status(200).send(result)        
    } else {
        res.status(404).send("Nor found")        
    }
})

app.get("/coutries/search", (req: Request, res: Response) => {
    let errorCode = 400

    try {
        
    } catch (error) {
        res.send(errorCode).end
    }
})


app.listen(3003, () => {
    console.log("Servidor pronto!")
})