import React from 'react';
import { Button } from './styled'

const FormButton = (props) => {
   return (
    <Button type={props.type} > {props.text} </Button>
  );
}

export default FormButton;