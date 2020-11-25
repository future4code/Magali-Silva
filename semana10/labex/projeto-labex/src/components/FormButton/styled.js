import styled from 'styled-components'

export const Button = styled.button`
    border: none;
    outline: none;

    width: 120px;

    padding: 8px;

    background-color: rgba(210, 119, 30, 1);

    color: #262320;
    font-size: 16px;

    border-radius: 20px;

    :hover {
        cursor: pointer;
        background-color: rgba(38, 35, 32, .6);
        color: wheat;
    }
`