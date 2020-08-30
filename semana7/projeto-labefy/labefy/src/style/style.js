import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.width};

    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: center;

    padding: ${props => props.padding};
`;

export const Image = styled.img`
  height: ${props => props.heightImage};
  
  padding-top: 80px;
`
export const Button = styled.button`
    background-color: rgba(255, 133, 23, 0.9);    
    color: white;

    font-weight: bold;

    border-radius: 100px;
    border: none;
    outline:none;

    margin: 10px;
    padding: 10px 20px;

    :hover {
        background-color: rgba(106, 106, 106, 0.8);
        color: white;

		cursor: pointer;
    }
`;

export const Input = styled.input`
    border-radius: 50px;
    border: none;
    outline:none;

    margin: 20px 0px;
    padding: 10px 20px;

    text-align: center;
`;

export const Link = styled.a`
    font-size: 20px;
    
    padding:10px;

    :hover {
        color: rgba(255, 133, 23, 0.9);
        font-weight: bold;
        
		cursor: pointer;
    }
`

export const Title = styled.h1`
    color: rgba(255, 133, 23, 0.9);
`

export const DeleteButton = styled.button`
    background-color: transparent;
    border: none;
    outline:none;
    color: gray;

    margin: 20px 0px;


    :hover {
        color: red;

		cursor: pointer;
    }
`;
