import axios from 'axios';
import { baseUrl } from '../constants/axiosConstants'

export const applyToTrip = (id, name, age, applicationText, profession, country ) => {
    const body = {
        name: name,
        age: age,
        applicationText: applicationText,
        profession: profession,
        country: country
    }


    axios
        .post(`${baseUrl}/trips/${id}/apply`, body)
        .then((response) => {
            alert("Inscrição realizada com sucesso!")
            console.log(response)
        })
        .catch((error) => {console.log(error)})
}