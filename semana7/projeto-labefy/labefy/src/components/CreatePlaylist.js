import React from 'react';
import axios from 'axios';
import { baseUrl, headers } from '../constants/axiosConstants'
import { Container, Button, Input, Title } from '../style/style'

class CreatePlaylist extends React.Component {
    state = {
        valueInput: ""
    }

    createPlaylist = () => {
        const body = {
            name: this.state.valueInput
        }
    
        axios.post( baseUrl, body, headers )
            .then((response) => {
                alert(`A playlist ${this.state.valueInput} foi criada com sucesso!`)

                this.setState({
                    valueInput: ""
                })                
            })
            .catch((error) => {
                alert("Ocorreu um erro ao adicionar a playlist.")
        })
    }

    controlInput = (event) => {
        this.setState({ valueInput: event.target.value })
        console.log(this.state.valueInput)
    }

    render() {
        return (
            <Container flexDirection={"column"} padding={"50px 0px"}>
                <Title>Crie uma playlist</Title>                
                <Input placeholder={"Insira o nome da playlist"} onChange={this.controlInput}/>
                <Button onClick={this.createPlaylist}>Criar</Button>                
            </Container>
        );
    }  
}

export default CreatePlaylist;