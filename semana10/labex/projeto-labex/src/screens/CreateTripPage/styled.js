import styled from 'styled-components';

export const Container = styled.div`
    height: 75%;

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const FormContainer = styled.div`
    background-color: rgba(166, 164, 143, .4);
    border-radius: 20px;

    width: 40%;
    height: 72%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px 0;
`


export const Input = styled.input`
    height: 35px;
    max-width: 400px;
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

export const Select = styled.select`
    height: 35px;
    max-width: 400px;
    width: 90%;

    border: none;
    outline: none;
    background-color: transparent;

    border-bottom: solid 2px black;

    margin-bottom: 15px;
`

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