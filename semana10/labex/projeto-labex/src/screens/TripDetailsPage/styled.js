import styled from 'styled-components';

export const Container = styled.div`

    height: 75%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const I = styled.i`
    color: rgba(210, 119, 30, 1);
`

export const H2 = styled.h2`
    color: rgba(245, 222, 179, .9);

    padding: 10px;
`
export const DetailContainer = styled.div`
    background-color: rgba(166, 164, 143, .4);
    border-radius: 20px;

    width: 40%;
    height: 72%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px 0;

    overflow: auto;
`

export const PersonContainer = styled.div`
   background-color: rgba(210, 119, 30, 1);

    border-radius: 10px;

    margin: 10px;
    padding: 10px 15px;

    width: 85%;

    display: flex;
    flex-direction: column;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    margin-top: 10px;
`