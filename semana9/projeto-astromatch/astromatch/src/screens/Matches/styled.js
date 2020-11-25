import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    border: solid 1px black;
    border-radius: 10px;

    width: 400px;
    height: 600px;
`

export const Div = styled.div`
    height: 90%;

    overflow: auto;
`

export const ContainerPerson = styled.div`
    display: flex;
    align-items: center;

    margin: 10px;  

    :hover {
        cursor: pointer;
        background-color: rgba(150, 150, 150, .1);
        border-radius: 10px;
    }
`

export const Image = styled.img`
    height: 50px;
    width: 50px;

    border-radius: 50%;

    margin: 10px;
`
