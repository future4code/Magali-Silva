import React from 'react';
import { useHistory } from 'react-router-dom';
import { useChangePageTitle } from '../../hooks/useChangePageTitle';
import { useProtectPage } from '../../hooks/useProtectPage';
import { useForm } from '../../hooks/useForm'
import { login } from '../../services/login'
import { Input } from '../../components/Input/styled';
import FormButton from '../../components/FormButton/FormButton'
import { Container, Form } from './styled'

function LoginPage() {
  const history = useHistory();

  useChangePageTitle("LABEX - Login")

  useProtectPage()

  const { form, onChange, resetState } = useForm({
    email: "",
    password: ""
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target

    onChange(name, value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    login(form.email, form.password, history)

    resetState()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        
        <Input 
          placeholder={"Email"} 
          value={form.email} 
          name="email"
          onChange={handleInputChange}
          type={"email"} 
        />

        <Input 
          placeholder={"Senha"} 
          value={form.password} 
          name="password"
          onChange={handleInputChange}
          type={"text"} 
        />

        <FormButton type={"submit"} text={"LOGIN"} />
      </Form>
    </Container>
  );
}

export default LoginPage;