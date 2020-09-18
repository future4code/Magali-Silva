import axios from 'axios';
import { baseUrl } from '../constants/axiosConstants'

export const createTrip = (name, planet, date, description, durationInDays) => {
    const body = {
        name: name,
        planet: planet,
        date: date,
        description: description,
        durationInDays: durationInDays
    }

    console.log(body)

    axios
        .post(`${baseUrl}/trips`, body, 
        { 
        headers: { 
            auth: localStorage.getItem("token") 
        }})
        .then((response) => {
            alert("Viagem adicionada com sucesso!")
            console.log(response)

        })
        .catch((error) => {console.log(error)})
}