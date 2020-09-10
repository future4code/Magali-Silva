import styled from 'styled-components';

export const Button = styled.button`
    width: 50px;
    height: 50px;
    
    outline: none;

    border-radius: 50%;

    font-size: 200%;

    border: solid 2px ${props => props.borderColor};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};

    box-shadow: 1px -1px 8px 1px rgba(189,189,189, .8);


    :hover {
        cursor: pointer;

        width: 55px;
        height: 55px;

        font-size: 220%;

        background-color: ${props => props.hoverBackgroundColor};
        color: ${props => props.hoverColor};   
    }
`