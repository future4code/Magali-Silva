import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button, Typography } from '@material-ui/core'
import {PageContainer, FormContainer} from './styled'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { goToSignUpPage } from '../../routes/Coordinator'
import useForm from '../../hooks/useForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import CircularProgress from '@material-ui/core/CircularProgress'

const LoginPage = (props) => {
    const [form, handleInputChange] = useForm({
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    useUnprotectedPage()

    const onClickLogin = (event) => {
        event.preventDefault()
        login(form, history, props.setButtonName, setIsLoading)
        console.log(form)
    }

    return (
        <PageContainer>
            <Typography color={"primary"} variant={"h3"} align={"center"}>LABEDDIT</Typography>
                        
            <form id={"login_form"}>
                <FormContainer>
                    <TextField 
                        value={form.email}
                        name={"email"}
                        onChange={handleInputChange}
                        label={"Email"}
                        variant={"outlined"}
                        type={"email"}
                        required
                        autoFocus
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
                        onClick={onClickLogin}
                        color={"primary"}
                        variant={"contained"}
                        type={"submit"} 
                        fullWidth
                    >
                    {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Fazer Login</>}
                    </Button>
                    <Button 
                        onClick={() => goToSignUpPage(history)}
                        color={"primary"}
                        variant={"text"}
                        type={"submit"} 
                    >Não tem cadastro? Clique aqui!</Button>
                </FormContainer>
            </form>
            
        </PageContainer>
    )
}

export default LoginPage