import React, { Component } from 'react';
import styled from 'styled-components';

const FormularioEtapa2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom:60px;
`

function Etapa2() {
    return (
        <FormularioEtapa2>
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <p>5. Qual o seu curso?</p>
            <input />
            <p>6. Qual a unidade de ensino?</p>
            <input />
        </FormularioEtapa2>
    ) 
}

export default Etapa2;