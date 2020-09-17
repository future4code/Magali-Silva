import React from 'react';
import { Button } from './styled'

const TripButton = (props) => {
   return (
    <Button onClick={props.buttonOnClick} > {props.text} </Button>
  );
}

export default TripButton;