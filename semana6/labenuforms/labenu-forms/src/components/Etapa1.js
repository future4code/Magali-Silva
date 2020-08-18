import React from 'react';
import styled from 'styled-components';

import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'

const FormularioEtapa1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

function Etapa1() {
    return (
        <div>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            <FormularioEtapa1>
                <PerguntaAberta pergunta={"1. Qual seu nome?"}/>    
                <PerguntaAberta pergunta={"2. Qual sua idade?"}/>
                <PerguntaAberta pergunta={"3. Qual seu email?"}/>
                
                <PerguntaFechada 
                    pergunta={"4. Qual sua escolaridade?"} 
                    opcoes={[
                        "Ensino Médio Incompleto",
                        "Ensino Médio Completo",
                        "Ensino Superior Incompleto",
                        "Ensino Superior Completo",
                    ]}
                />
            </FormularioEtapa1>       
        </div>
    )  
} 

export default Etapa1;