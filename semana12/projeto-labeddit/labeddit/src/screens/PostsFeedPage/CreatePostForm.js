import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import { Button, Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

import {FormContainer, Form} from './styled'

import useProtectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import { createPost } from '../../services/post'

const CreatePostForm = () => {
    const [form, handleInputChange] = useForm({
        text: "",
        title: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    useProtectedPage()

    const onClickCreate = (event) => {
        const token = localStorage.getItem("token")
        
        event.preventDefault()

        createPost(form, token, setIsLoading)

        console.log(form)
    }

    return (      
                        
        <FormContainer>
            <Typography align={"center"} variant={"h6"}>Criar post</Typography>
            <Form id={"create_posst_form"}>
                <TextField 
                    value={form.title}
                    name={"title"}
                    onChange={handleInputChange}
                    label={"Título do post"}
                    variant={"outlined"}
                    type={"text"}
                    required
                    autoFocus
                    fullWidth
                />
                <TextField 
                    value={form.text}
                    name={"text"}
                    onChange={handleInputChange}
                    label={"Conteúdo do post"}
                    variant={"outlined"}
                    type={"text"}
                    required
                    fullWidth
                />
                <Button
                    onClick={onClickCreate}
                    color={"primary"}
                    variant={"contained"}
                    type={"submit"} 
                    fullWidth
                >
                {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Criar</>}
                </Button>
            </Form> 
        </FormContainer>
    )
}

export default CreatePostForm