import axios from 'axios'
import { BASE_URL } from '../constants/baseUrl'

export const createPost = (body, token, setIsLoading) => {
    setIsLoading(true)

    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: token
        }
        })
        .then((response) => {       
            console.log(response)   
            alert("Post adicionado com sucesso!")         
            setIsLoading(false) 
        })
        .catch((error) => {
            console.log(error)
            alert("Erro ao adicionar post, tente novamente.")
            setIsLoading(false)
        })
}

export const getPosts = (token, setPostArray) => {
    axios.get(`${BASE_URL}/posts`, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        console.log(response.data.posts)
        setPostArray(response.data.posts)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const postVote = (id, token, direction) => {
    const body = {
        direction: direction
    }

    axios.put(`${BASE_URL}/posts/${id}/vote`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        console.log(response)

    })
    .catch((error) => {
        console.log(error)
    })
}

export const getPostDetail = (id, token, setPostDetail, setPostComments) => {
    axios.get(`${BASE_URL}/posts/${id}`, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        console.log(response.data.post.comments)
        setPostDetail(response.data.post)
        setPostComments(response.data.post.comments)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const createComment = (token, id, body, setIsLoading) => {
    setIsLoading(true)
    
    axios.post(`${BASE_URL}/posts/${id}/comment`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        console.log(response.status)
        alert("Comentário adicionado com sucesso!")
        setIsLoading(false)
    })
    .catch((error) => {
        console.log(error)
        alert("Erro ao adicionar comentário, tente novamente.")
        setIsLoading(false)
    })
}