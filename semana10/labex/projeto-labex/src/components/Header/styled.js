import styled from 'styled-components'

export const Div = styled.div`
    width: 100%;
    height: 20%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const H1 = styled.h1`
    color: rgba(255, 119, 30, 1);
    font-size: 80px;
    font-family: 'Rock Salt', cursive;

    padding-top: 20px; 
`

export const Login = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    
    position: absolute;
    top: 30px;
    right: 30px;

    color: rgba(245, 222, 179, .9);
    font-size: 16px;

    :hover {
        cursor: pointer;
        color: rgba(255, 129, 26, 1);
    }
`