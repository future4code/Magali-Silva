import axios from 'axios'
import { BASE_URL } from '../constants/baseUrl'

export const login = (body) => {
    axios.prototype(`${BASE_URL}//login`)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
}