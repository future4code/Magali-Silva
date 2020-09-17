import React from 'react';
import { InputStyled } from './styled'

const Input = (props) => {
   return (
    <InputStyled placeholder={props.placeholder} value={props.value} type={props.type} onChange={props.onChange} />
  );
}

export default Input;