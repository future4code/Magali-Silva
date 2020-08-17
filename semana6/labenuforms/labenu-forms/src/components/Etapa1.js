import React from 'react';
import styled from 'styled-components';

import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'

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
            <PerguntaAberta pergunta={"1. Qual o seu nome?"}/>    
            <input />
            <PerguntaAberta pergunta={"2. Qual a sua idade?"}/>
            <input />
            <PerguntaAberta pergunta={"3. Qual o seu email?"}/>
            <input />
            <PerguntaFechada pergunta={"4. Qual o sua escolaridade?"}/>
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