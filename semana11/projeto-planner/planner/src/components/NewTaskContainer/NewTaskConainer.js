import React from 'react'
import axios from 'axios' 
import { Div } from './styled'
import { useForm } from '../../hooks/useForm'
import { baseUrl } from '../../constants/axiosConstants'

const NewTaskContainer = () => {
    
    const createTask = (text, day) => {
        const body = {
            text: text,
            day: day
        }

        axios.post(`${baseUrl}`, body)
        .then((response) => {
            console.log(response)

        })
        .catch((error) => {
            console.log(error)
        })

        console.log(body)
    }
    
    const { form, onChange, resetState } = useForm({
        text: "",
        day: ""
    })
    
    const handleInputChange = (event) => {
        const { name, value } = event.target

        onChange(name, value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        createTask(form.text, form.day)
    
        resetState()
    }
    
    
    
    return (
        <Div>
            <form onSubmit={handleSubmit}>
                <label for="tarefa">Nova tarefa:</label>
                <input 
                    value={form.text}
                    name="text"
                    onChange={handleInputChange} 
                    type="text" 
                    required
                />

                <select 
                    value={form.day}        
                    name="day"
                    onChange={handleInputChange}
                    type="text"
                    required
                >
                    <option value="domingo">Domingo</option>
                    <option value="segunda">Segunda-feira</option>
                    <option value="terca">Terça-feira</option>
                    <option value="quarta">Quarta-feira</option>
                    <option value="quinta">Quinta-feira</option>
                    <option value="sexta">Sexta-feira</option>
                    <option value="sabado">Sábado</option>
                </select>

                <button type={"submit"} >Criar tarefa</button>
            </form>   
        </Div>
    );
}

export default NewTaskContainer;