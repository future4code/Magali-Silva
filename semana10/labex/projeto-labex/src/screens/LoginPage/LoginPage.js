import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToAdminPage, goToHomePage } from '../../router/goToPages'
import axios from 'axios'
import { baseUrl } from '../../constants/axiosConstants'

function LoginPage() {
  const [ emailValue, setEmailValue ] = useState("");
  const [ passwordValue, setPasswordValue ] = useState("");
  const history = useHistory();

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
    <div>
      <p>ESSA É A PÁGINA DE LOGIN DO ADMINISTRADOR</p>
      <div>
        <input placeholder={"Email"} value={emailValue} onChange={handleEmailChange} />
        <input placeholder={"Senha"}  value={passwordValue} onChange={handlePasswordChange} />
        <button onClick={handleLogin} >LOGIN</button>
      </div>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </div>
  );
}

export default LoginPage;