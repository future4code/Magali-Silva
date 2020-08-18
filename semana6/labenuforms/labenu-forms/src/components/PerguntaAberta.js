import React from 'react';
import styled from 'styled-components';

const ContainerPerguntaAberta = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

function PerguntaAberta(props) {
    return (
        <ContainerPerguntaAberta>
            <p>{props.pergunta}</p>
            <input />
        </ContainerPerguntaAberta>
    )
} 

export default PerguntaAberta;