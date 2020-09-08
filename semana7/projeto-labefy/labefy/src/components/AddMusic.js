import React from 'react';
import axios from 'axios';
import { baseUrl, headers } from '../constants/axiosConstants'
import { Container, Input, Button } from '../style/style'


class AddMusic extends React.Component {
    state = {
        nameMusic: "",
        artistMusic: "", 
        urlMusic: ""
    }
    
    addTrack = (id) => {
        const body = {
            name: this.state.nameMusic,
            artist: this.state.artistMusic, 
            url: this.state.urlMusic
        }

        axios.post(`${baseUrl}/${id}/tracks`, body, headers)
        .then((response) => {
            alert(`A música ${this.state.nameMusic} foi adicionada com sucesso!`)

            this.setState({ 
                nameMusic: "",
                artistMusic: "", 
                urlMusic: ""
            })
        })
        .catch((error) => {
            alert(`Ocorreu um erro ao tentar adiocinar a música ${this.state.nameMusic}. Verifique se preencheu todos os dados!`)
        })
    }
    
    inputMusic = (event) => {
        this.setState({ nameMusic: event.target.value })
        console.log(this.state.nameMusic)
    }

    inputArtist = (event) => {
        this.setState({ artistMusic: event.target.value })
        console.log(this.state.artistMusic)
    }

    inputUrl = (event) => {
        this.setState({ urlMusic: event.target.value })
        console.log(this.state.urlMusic)
    }

    render() {
        
        return(
            <Container flexDirection={"column"} >
                <Input placeholder={"Nome da música"} onChange={this.inputMusic}/>
                <Input placeholder={"Nome do artista"} onChange={this.inputArtist}/>
                <Input placeholder={"Link da música"}  onChange={this.inputUrl}/>
                <Button onClick={() => this.addTrack(this.props.playlistId)} >Adicionar</Button>
            </Container>
        )
        
    }
}

export default AddMusic;