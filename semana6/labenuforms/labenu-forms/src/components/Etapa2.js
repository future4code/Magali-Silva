import React from 'react';
import styled from 'styled-components';

import PerguntaAberta from './PerguntaAberta'

const FormularioEtapa2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Etapa2() {
    return (
        <div>
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <FormularioEtapa2>
                <PerguntaAberta pergunta={"5. Qual curso?"}/>
                <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"}/>
            </FormularioEtapa2>
        </div>
    ) 
}

export default Etapa2;