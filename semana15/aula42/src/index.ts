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

app.get("/countries/all", (req: Request, res: Response) => {
    const result: GetCountry[] = countries.map(country => ({
        id: country.id,
        name: country.name
    }))

    res.status(200).send(result)
})

app.get("/countries/search", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        let result: country[] = countries
        
        if (!req.query) {
            throw new Error()
        }

        if (req.query.name) {
            result = result.filter(
                country => country.name.toLowerCase().includes(String(req.query.name).toLowerCase())
            )
        }

        if (req.query.capital) {
            result = result.filter(
                country => country.capital.includes(String(req.query.capital))
            )
        }

        if (req.query.continent) {
            result = result.filter(
                country => country.continent.includes(String(req.query.continent))
            )
        }
        
        res.status(200).send(result)

    } catch (error) {
        res.send(errorCode).end
    }
})

app.get("/countries/:id", (req: Request, res: Response) => {

    const result: country | undefined = countries.find(country => country.id === Number(req.params.id))

    if (result) {
        res.status(200).send(result)        
    } else {
        res.status(404).send("Not found")        
    }
})

app.listen(3003, () => {
    console.log("Servidor pronto!")
})