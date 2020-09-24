import React, { useState, useEffect } from 'react'
import { Section, Div } from './styled';
import axios from 'axios' 
import { baseUrl } from '../../constants/axiosConstants'

const TaskListsContainer = () => {
    const [ tasksList, setTasksList ] = useState([])

    const getTasks = () => {
        axios.get(`${baseUrl}`)
        .then((response) => {
            console.log(response.data)
            setTasksList(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    const deleteTask = (id) => {
        axios.delete(`${baseUrl}/${id}`)
        .then((response) => {
            console.log(response)
            window.location.reload(true)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getTasks()
    }, [])    

    return (
        <Section>
            <Div>
                <h3>Domingo</h3>
                <div>
                    {tasksList.map((task) => {
                        if (task.day === "domingo") {
                            return (
                                <div key={task.id}>
                                    <p>{task.text}</p>
                                    <button onClick={() => deleteTask(task.id)}>X</button>
                                </div>
                            )
                        }
                    })}    
                </div>
            </Div>

            <Div>
                <h3>Segunda-feira</h3>
                <div>
                    {tasksList.map((task) => {
                        if (task.day === "segunda") {
                            return (
                                <div key={task.id}>
                                    <p>{task.text}</p>
                                    <button onClick={() => deleteTask(task.id)}>X</button>
                                </div>
                            )
                        }
                    })}    
                </div>
            </Div>

            <Div>
                <h3>Terça-feira</h3>
                <div>
                    {tasksList.map((task) => {
                        if (task.day === "terca") {
                            return (
                                <div key={task.id}>
                                    <p>{task.text}</p>
                                    <button onClick={() => deleteTask(task.id)}>X</button>
                                </div>
                            )
                        }
                    })}    
                </div>
            </Div>
    
            <Div>
                <h3>Quarta-feira</h3>
                <div>
                    {tasksList.map((task) => {
                        if (task.day === "quarta") {
                            return (
                                <div key={task.id}>
                                    <p>{task.text}</p>
                                    <button onClick={() => deleteTask(task.id)}>X</button>
                                </div>
                            )
                        }
                    })}    
                </div>
            </Div>
    
            <Div>
                <h3>Quinta-feira</h3>
                <div>
                    {tasksList.map((task) => {
                        if (task.day === "quinta") {
                            return (
                                <div key={task.id}>
                                    <p>{task.text}</p>
                                    <button onClick={() => deleteTask(task.id)}>X</button>
                                </div>
                            )
                        }
                    })}    
                </div>
            </Div>

            <Div>                    
                <h3>Sexta-feira</h3>               
                <div>
                    {tasksList.map((task) => {
                        if (task.day === "sexta") {
                            return (
                                <div key={task.id}>
                                    <p>{task.text}</p>
                                    <button onClick={() => deleteTask(task.id)}>X</button>
                                </div>
                            )
                        }
                    })}    
                </div>
            </Div>

            <Div>
                <h3>Sábado</h3>
                <div>
                    {tasksList.map((task) => {
                        if (task.day === "sabado") {
                            return (
                                <div key={task.id}>
                                    <p>{task.text}</p>
                                    <button onClick={() => deleteTask(task.id)}>X</button>
                                </div>
                            )
                        }
                    })}    
                </div>
            </Div>
        </Section>
    )
}

export default TaskListsContainer;