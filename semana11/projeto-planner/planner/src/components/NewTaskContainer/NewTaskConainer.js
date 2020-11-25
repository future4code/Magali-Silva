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

        window.location.reload(true)
    }

    return (
        <Div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tarefa"> Nova tarefa:</label>
                <input 
                    value={form.text}
                    name="text"
                    onChange={handleInputChange} 
                    type="text" 
                    required
                    placeholder={"Digite a tarefa"} 
                />

                <select 
                    value={form.day}        
                    name="day"
                    onChange={handleInputChange}
                    type="text"
                    required
                    data-testid="select"
                >
                    <option value="none">Dias da Semana</option>
                    <option value="domingo" data-testid="domingo">Domingo</option>
                    <option value="segunda" data-testid="segunda">Segunda-feira</option>
                    <option value="terca" data-testid="terca">Terça-feira</option>
                    <option value="quarta" data-testid="quarta">Quarta-feira</option>
                    <option value="quinta" data-testid="quinta">Quinta-feira</option>
                    <option value="sexta" data-testid="sexta">Sexta-feira</option>
                    <option value="sabado" data-testid="sabado">Sábado</option>
                </select>

                <button type={"submit"} >Criar</button>
            </form>   
        </Div>
    );
}

export default NewTaskContainer;