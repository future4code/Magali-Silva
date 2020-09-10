import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../../assets/img/logo.png'

import { Container, Div, Image, Icon } from '../NavBar/styled';

function NavBar(props) {
    
    return (
        <Container>
            <Div>
                <Image src={logo} alt={"Logo Astromatch"}/>
                <Icon src={props.srcIcon} alt={props.altIcon} onClick={props.onClick} />
            </Div>
            <hr/>
        </Container>    
    );
}

export default NavBar;