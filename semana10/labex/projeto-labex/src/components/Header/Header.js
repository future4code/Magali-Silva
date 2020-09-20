import React from 'react';
import { Div, H1, Login, Back, Logout } from './styled';
import { goToLoginPage, goToHomePage, goBack, goToAdminPage } from '../../router/goToPages';
import { useHistory } from 'react-router-dom';

const Header = () => { 
    const history = useHistory();
    
    const token = window.localStorage.getItem("token");

    const handleLogout = () => {
      localStorage.removeItem("token")
      goToHomePage(history)
      window.location.reload(true)
    }

    const changeButton = () => {
        if (token) {
          return (
            <div>
              <Login onClick={() => goToAdminPage(history)} > ADMINISTRADOR </Login>
              <Logout onClick={handleLogout} > LOGOUT </Logout>
            </div>
          )
          
        } else {
          return (
            <Login onClick={() => goToLoginPage(history)} > LOGIN </Login>
          )
        }
    }

    return (
        <Div>
            <Back onClick={() => goBack(history)} > VOLTAR </Back>
            <H1 onClick={() => goToHomePage(history)} >labeX</H1>
            {changeButton()}
        </Div>
    );
}
  
export default Header;