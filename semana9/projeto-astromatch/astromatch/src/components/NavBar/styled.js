import styled from 'styled-components';

export const Container = styled.div`    
    width: 100%;
    height: 8%;
`
export const Div = styled.div`
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Image = styled.img`
    width: 35%;
    margin: 10px 0;
`

export const Icon = styled.img`
    width: 25px;
    margin:  0;

    opacity: 15%;

    :hover {
        opacity: 60%;
        cursor: pointer;
    }
`