import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import TextField from '@material-ui/core/TextField'
import { Button, Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

import {FormContainer, Form} from './styled'

import useProtectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import { createComment } from '../../services/post'

const CreateCommentForm = () => {
    const pathParams = useParams();
    const [form, handleInputChange] = useForm({
        text: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    useProtectedPage()

    const onClickCreateComment = (event) => {
        const token = localStorage.getItem("token")
        
        event.preventDefault()

        createComment(token, pathParams.id, form, setIsLoading)

        console.log(form)
    }

    return (      
                        
        <FormContainer>
            <Typography align={"center"} variant={"h6"}>Adicionar comentário</Typography>
            
            <Form id={"create_comment_form"}>    
                <TextField 
                    value={form.text}
                    name={"text"}
                    onChange={handleInputChange}
                    label={"Conteúdo do comentário"}
                    variant={"outlined"}
                    type={"text"}
                    required
                    fullWidth
                />
                <Button
                    onClick={onClickCreateComment}
                    color={"primary"}
                    variant={"contained"}
                    type={"submit"} 
                    fullWidth
                >
                {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Comentar</>}
                </Button>
            </Form> 
        </FormContainer>
    )
}

export default CreateCommentForm