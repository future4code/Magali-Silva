import axios from 'axios';
import { baseUrl } from '../constants/axiosConstants'

export const decideCandidate = (tripId, candidateId, approve) => {
    const body = {
        approve: approve
    }

    axios
        .put(`${baseUrl}/trips/${tripId}/candidates/${candidateId}/decide`, body,
        { 
        headers: { 
            auth: localStorage.getItem("token") 
        }})
        .then((response) => {
            if (approve) {
                alert("Candidato aprovado com sucesso!")
            } else {
                alert("Candidato recusado!")
            }
            console.log(response)
            window.location.reload(true)
        })
        .catch((error) => {console.log(error)})
}
