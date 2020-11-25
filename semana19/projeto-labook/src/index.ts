import express, { Express } from "express"
import cors from "cors"
import { userRouter } from "./routes/userRoutes"
import { postRouter } from "./routes/postRoutes"

const app: Express = express()
app.use(express.json())
app.use(cors())

app.use('/users', userRouter)
app.use('/posts', postRouter)


app.listen(3003, () => {
   console.log("Server running on port 3003")
})