import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToAdminPage, goToHomePage } from '../../router/goToPages'

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <p>ESSA É A PÁGINA DE LOGIN DO ADMINISTRADOR</p>
      <div>
        <input placeholder={"Email"}/>
        <input placeholder={"Senha"}/>
        <button onClick={() => goToAdminPage(history)} >LOGIN</button>
      </div>
      <button onClick={() => goToHomePage(history)} >HOME</button>
    </div>
  );
}

export default LoginPage;