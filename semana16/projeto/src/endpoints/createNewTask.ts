import { Request, Response } from 'express'
import { createTask } from '../data/createTask'
import moment from 'moment'

export const createNewTask = async (req: Request, res: Response) => {
    try {
        const { title, description, deadline, authorId } = req.body

        if (!title || !description || !deadline || !authorId) {
            res.status(400).send({ message: "Todos os campos devem ser preenchidos." })
            return
        }

        const date: number = moment(deadline, 'DD/MM/YYYY').unix() - moment().unix()

        if (date <= 0) {
            res.status(400).send({ message: '"deadline" deve ser uma data futura.' })
            return
        }

        const id: string = Date.now() + Math.random().toString()

        await createTask(
            id,
            title,
            description,
            moment(deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            authorId
        );

        res.status(200).send({
            message: "Tarefa criada com sucesso.",
            id
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: error })
    }
}