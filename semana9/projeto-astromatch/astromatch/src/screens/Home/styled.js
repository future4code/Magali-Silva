import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    border: solid 1px black;
    border-radius: 10px;

    width: 400px;
    height: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const ProfileContainer = styled.div`
    width: 350px;
    height: 420px;

    position: relative;
`

export const ButtonContainer = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: space-evenly;
`
export const Photo = styled.img`
    height: 100%;
    width: 100%;
    
    border-radius: 10px;
    box-shadow: 2px 4px 10px 3px rgba(189,189,189,1);

    opacity: 90%;
`
export const Identification = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;

    border-radius: 10px;

    background-image: linear-gradient(1deg, grey, transparent);
`

export const Name = styled.p`
    color: white;
    font-size: 26px;

    padding: 5px 20px;
`

export const Bio = styled.p`
    color: white;
    padding: 0 20px 20px 20px;
`
