import React from 'react';
import { ButtonStyled } from './styled'

const Button = (props) => {
   return (
    <ButtonStyled onClick={props.buttonOnClick} > {props.text} </ButtonStyled>
  );
}

export default Button;