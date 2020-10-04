import axios from 'axios'
import { BASE_URL } from '../constants/baseUrl'
import { goToPostsFeedPage } from '../routes/Coordinator'

export const login = (body, history, setButtonName, setIsLoading) => {

    setIsLoading(true)

    axios.post(`${BASE_URL}/login`, body)
        .then((response) => {
            console.log(response)            
            localStorage.setItem("token", response.data.token)            
            setIsLoading(false)            
            alert("Bem-vindo(a)!")
            goToPostsFeedPage(history)            
            setButtonName("Logout")
        })
        .catch((error) => {
            console.log(error)
            setIsLoading(false)
            alert("Falha no login, tente novamente.")
        })
}

export const signUp = (body, history, setButtonName, setIsLoading) => {
    setIsLoading(true)

    axios.post(`${BASE_URL}/signup`, body)
        .then((response)=>{
            localStorage.setItem('token', response.data.token)
            setIsLoading(false)
            alert("Cadastro realizado com sucesso! Bem-vindo(a)!")
            goToPostsFeedPage(history)
            setButtonName("Logout")
        })
        .catch((error) => {
            console.log(error)
            setIsLoading(false)
            alert("Falha no cadastro, tente novamente.")
        })
}