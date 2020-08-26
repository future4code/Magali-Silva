import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { baseUrl, headers } from '../constants/constantesAxios';

class TelaUsuario extends React.Component {
    

    render() {
        return (
            <div>
                <h2>Detalhes Usuário</h2>
                <div>
                    <p>Nome:</p>
                    <p>Email:</p>
                    <button> Deletar</button>
                </div>
            </div>
        )
    }
}

export default TelaUsuario;