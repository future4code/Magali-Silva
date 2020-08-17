import React from 'react';
import styled from 'styled-components';

import PerguntaAberta from './PerguntaAberta'

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
            <PerguntaAberta pergunta={"5. Qual o seu curso?"}/>
            <input />
            <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"}/>
            <input />
        </FormularioEtapa2>
    ) 
}

export default Etapa2;