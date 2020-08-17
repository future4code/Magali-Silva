import React from 'react';
import styled from 'styled-components';

import PerguntaAberta from './PerguntaAberta'

const FormularioFinal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom:60px;
`


function Final()  {
    return (
        <FormularioFinal>
            <h3>O FORMULÁRIO ACABOU</h3>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </FormularioFinal>
    );
}

export default Final;