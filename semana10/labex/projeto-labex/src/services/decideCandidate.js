import react from 'react'
import axios from 'axios';
import { baseUrl } from '../constants/axiosConstants'

export const decideCandidate = (tripId, candidateId, aprove) => {
    const body = {
        aprove: aprove
    }

    console.log(body, tripId, candidateId)

    axios
        .put(`${baseUrl}/trips/${tripId}/candidates/${candidateId}/decide`, body,
        { 
        headers: { 
            auth: localStorage.getItem("token") 
        }})
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {console.log(error)})
}
