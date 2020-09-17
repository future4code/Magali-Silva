import React from 'react';
import { Div, H1, Login } from './styled';
import { goToLoginPage } from '../../router/goToPages';
import { useHistory } from 'react-router-dom';

const Header = () => { 
    const history = useHistory();
    
    return (
        <Div>
            <H1>labeX</H1>
            <Login onClick={() => goToLoginPage(history)} > LOGIN </Login>
        </Div>
    );
}
  
export default Header;