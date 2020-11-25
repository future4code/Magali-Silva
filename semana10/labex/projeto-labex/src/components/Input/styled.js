import styled from 'styled-components';

export const Input = styled.input`
    height: 35px;
    max-width: 280px;
    width: 90%;

    border: none;
    outline: none;
    background-color: transparent;

    border-bottom: solid 2px black;


    ::placeholder {
        color: black;
    }

    margin-bottom: 15px;
`