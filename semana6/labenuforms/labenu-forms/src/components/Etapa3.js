import React from 'react';
import styled from 'styled-components';

import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'

const FormularioEtapa3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

function Etapa3()  {
    return (
        <div>
            <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
            <FormularioEtapa3>
                <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"}/>
                <PerguntaFechada 
                    pergunta={"6. Você fez algum curso complementar?"} 
                    opcoes={[
                        "Curso técnico",
                        "Curso de inglês",
                        "Nenhum",
                    ]}
                />            
            </FormularioEtapa3>
        </div>
    )
}

export default Etapa3;