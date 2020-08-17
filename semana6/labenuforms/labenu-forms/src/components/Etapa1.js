import React, { Component } from 'react';
import styled from 'styled-components';

const FormularioEtapa1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom:60px;
`

function Etapa1() {
    return (
        <FormularioEtapa1>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            <p>1. Qual o seu nome?</p>
            <input />
            <p>2. Qual a sua idade?</p>
            <input />
            <p>3. Qual o seu email?</p>
            <input />
            <p>4. Qual o sua escolaridade?</p>
            <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior completo</option>
            </select>            
        </FormularioEtapa1>
    )  
} 

export default Etapa1;