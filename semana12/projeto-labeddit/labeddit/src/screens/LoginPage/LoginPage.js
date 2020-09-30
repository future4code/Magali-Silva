import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import {PageContainer, FormContainer} from './styled'
import { login } from '../../services/user'

const LoginPage = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    const onClickLogin = (event) => {
        event.preventDefault()

        // const element = document.getElementById("login_form")
        // const isValid = element.checkValidity()
        // element.reportValidity()

        // if (isValid){
        //      console.log(form)
        //      login(form)
        // }
        login(form)

        console.log(form)
    }


    return (
        <PageContainer>
            <h1>LabEddit</h1>
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
                        color={"primary"}
                        variant={"contained"}
                        type={"submit"} 
                        fullWidth
                    >Fazer Login</Button>
                    <Button 
                        onClick={onClickLogin}
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