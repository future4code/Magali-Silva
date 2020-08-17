import React, { Component } from 'react';
import styled from 'styled-components';

const FormularioEtapa3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom:60px;
`

function Etapa3()  {
    return (
        <FormularioEtapa3>
            <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input />
            <p>6. Você fez algum curso complementar?</p>
            <select>
                <option>Nenhum</option>
                <option>Curso técnico</option>
                <option>Curso de inglês</option>                
            </select>
        </FormularioEtapa3>
    )
}

export default Etapa3;