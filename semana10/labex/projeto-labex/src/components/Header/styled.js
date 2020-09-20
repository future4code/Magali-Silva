import styled from 'styled-components'

export const Div = styled.div`
    width: 100%;
    height: 25%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const H1 = styled.button`
    border: none;
    outline: none;
    background-color: transparent;

    color: rgba(255, 119, 30, 1);
    font-size: 80px;
    font-family: 'Rock Salt', cursive;

    :hover {
        cursor: pointer;
    }
`

export const Login = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    
    position: absolute;
    top: 25px;
    right: 25px;

    color: rgba(245, 222, 179, .9);
    font-size: 16px;

    :hover {
        cursor: pointer;
        color: rgba(255, 129, 26, 1);
    }
`

export const Back = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    
    position: absolute;
    top: 25px;
    left: 25px;

    color: rgba(245, 222, 179, .9);
    font-size: 16px;

    :hover {
        cursor: pointer;
        color: rgba(255, 129, 26, 1);
    }
`
export const Logout = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    
    position: absolute;
    top: 50px;
    right: 25px;

    color: rgba(245, 222, 179, .9);
    font-size: 16px;

    :hover {
        cursor: pointer;
        color: rgba(255, 129, 26, 1);
    }
`