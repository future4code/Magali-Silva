import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage, goBack } from '../../router/goToPages';
import { useChangePageTitle } from '../../hooks/useChangePageTitle';
import axios from 'axios';
import { baseUrl } from '../../constants/axiosConstants';
import { Container, Div } from './styled'
import { Input } from '../../components/Input/styled';

function LoginPage() {
  const [ emailValue, setEmailValue ] = useState("");
  const [ passwordValue, setPasswordValue ] = useState("");
  const history = useHistory();

  
  useChangePageTitle("LABEX - Login")

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      history.push("/login/admin");
    }
    
  }, [history])

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value)
  }

  const handleLogin = () => {
    const body = {
      email: emailValue,
      password: passwordValue
    };

    axios
      .post(`${baseUrl}/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/login/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Div>
        <Input placeholder={"Email"} value={emailValue} type={"email"} onChange={handleEmailChange}/>
        <Input placeholder={"Senha"}  value={passwordValue} type={"text"} onChange={handlePasswordChange}/>
        <button onClick={handleLogin} >LOGIN</button>
      </Div>
      <button onClick={() => goBack(history)} >VOLTAR</button>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </Container>
  );
}

export default LoginPage;