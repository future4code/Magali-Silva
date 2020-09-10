import React from 'react';
import { Button } from './styled'

function ButtonMatch(props) {
    return (
        <Button
            borderColor={props.borderColor}
            backgroundColor={props.backgroundColor}
            color={props.color}
            hoverBackgroundColor={props.hoverBackgroundColor}
            hoverColor={props.hoverColor}

            onClick={props.onClick}
        >{props.text}</Button>
    )
}

export default ButtonMatch;