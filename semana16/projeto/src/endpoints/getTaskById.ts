import { Request, Response } from 'express'
import { selectTaskById } from '../data/selectTaskById'
import moment from 'moment'

export const getTaskById = async (req: Request, res: Response) => {
    try {
        const task = await selectTaskById(req.params.id);

        if (!task) {
            res.status(404).send({ message: "Tarefa não encontrado." })
            return
        }

        res.status(200).send({
            id: task.id,
            title: task.title,
            description: task.description,
            deadline: moment(task.deadline, 'YYYY-MM-DD').format('DD/MM/YYYY'),
            status: task.status,
            authorId: task.author_id,
            authorNickname: task.nickname
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: error })
    }

}
