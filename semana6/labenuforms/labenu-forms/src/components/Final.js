import React from 'react';
import styled from 'styled-components';

const ContainerFinal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom:60px;
`


function Final()  {
    return (
        <ContainerFinal>
            <h3>O FORMULÁRIO ACABOU</h3>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </ContainerFinal>
    );
}

export default Final;