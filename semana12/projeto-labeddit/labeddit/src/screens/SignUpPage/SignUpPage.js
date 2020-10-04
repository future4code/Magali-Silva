import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button, Typography } from '@material-ui/core'
import {PageContainer, FormContainer} from './styled'
import { signUp } from '../../services/user'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import CircularProgress from '@material-ui/core/CircularProgress'


const SignUpPage = (props) => {
    const [form, handleInputChange] = useForm({
        username: "",
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    useUnprotectedPage()

    const onClickSignUp = (event) => {
        event.preventDefault()

        signUp(form, history, props.setButtonName, setIsLoading)

        console.log(form)
    }


    return (
        <PageContainer>
            <Typography color={"primary"} variant={"h3"} align={"center"}>LABEDDIT</Typography>
            <Typography variant={"h5"} align={"center"}>Cadastre-se!</Typography>
            <form id={"signup_form"}>
                <FormContainer>
                    <TextField 
                        value={form.username}
                        name={"username"}
                        onChange={handleInputChange}
                        label={"Nome"}
                        variant={"outlined"}
                        type={"text"}
                        required
                        autoFocus
                        fullWidth
                    />
                    <TextField 
                        value={form.email}
                        name={"email"}
                        onChange={handleInputChange}
                        label={"Email"}
                        variant={"outlined"}
                        type={"email"}
                        required
                        fullWidth
                    />
                    <TextField 
                        value={form.password}
                        name={"password"}
                        onChange={handleInputChange}
                        label={"Senha"}
                        variant={"outlined"}
                        type={"password"}
                        required
                        fullWidth
                    />
                    <Button
                        onClick={onClickSignUp}
                        color={"primary"}
                        variant={"contained"}
                        type={"submit"} 
                        fullWidth
                    >
                        {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Cadastrar</>}
                    </Button>
                </FormContainer>
            </form>            
        </PageContainer>
    )
}

export default SignUpPage