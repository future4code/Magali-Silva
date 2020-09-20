import React from 'react';
import { Div, H1, Login, Back, Logout } from './styled';
import { goToLoginPage, goToHomePage, goBack, goToAdminPage } from '../../router/goToPages';
import { useHistory, useLocation } from 'react-router-dom';

const Header = () => { 
    const history = useHistory();
    const token = window.localStorage.getItem("token");
    const location = useLocation();
    
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

    const changeBack = () => {
      if (location.pathname !== "/") {
        return (
          <Back onClick={() => goBack(history)} > VOLTAR </Back>          
        )   
      }
    }

    return (
        <Div>
          {changeBack()}
          <H1 onClick={() => goToHomePage(history)} >labeX</H1>
          {changeButton()}
        </Div>
    );
}
  
export default Header;