import React from 'react';
import axios from 'axios';
import { baseUrl, headers } from '../constants/axiosConstants'
import styled from 'styled-components';
import AddMusic from '../components/AddMusic'
import { Container, Button, DeleteButton} from '../style/style'

const Hr = styled.hr`
    width: 400px;
    border-color: orange;
`;

const I = styled.i`
    color: rgba(255, 133, 23, 0.9);
`

const NewHr = styled.hr`
    width: 100px;
    border-color: gray;
    opacity: 20%;
`

class PlaylistDetails extends React.Component {
    state = {
        tracks: [],
        addMusic: false
    }

    getPlaylistTracks = () => {
        
        axios.get(`${baseUrl}/${this.props.id}/tracks`, headers )
            .then((response) => {
                this.setState({ tracks: response.data.result.tracks })
            })
            .catch((error) => {
                alert("Ocorreu um erro")
            })
    }

    deletePlaylistTrack = (id) => {
        axios.delete(`${baseUrl}/${this.props.id}/tracks/${id}`, headers)
            .then((response) => {
                alert("A música foi removida com sucesso.")
                this.getPlaylistTracks()
            })
            .catch((error) => {
                alert("Não foi possível remover a música.")
            })
    }

    onClickAddMusic = () => {
        this.setState({
            addMusic: !this.state.addMusic
        })

        this.componentDidMount()
    }

    componentDidMount = () => {
        this.getPlaylistTracks()
    }

    render() {
        let add = () => {
            return <AddMusic playlistId={this.props.id}/>
        }

        if (this.state.addMusic) {
            return (
                <Container flexDirection={"column"}>
                    <h3>Adicionar música a playlist <I>{this.props.playlistName}</I></h3>
                    {add()}
                    <Button onClick={this.onClickAddMusic}> Voltar </Button>
                    <Hr />  
                </Container>
            )
        } else {
            return (
                <Container flexDirection={"column"} >
                    <h3>Detalhes da playlist <I>{this.props.playlistName}</I></h3>
                    {this.state.tracks.map((track) => {
                        return(
                            <Container flexDirection={"column"} key={track.id}>
                                <h4> {track.name} </h4>
                                <h5><i> {track.artist} </i></h5>
                                <audio controls="controls">
                                    <source src={track.url} type={"audio/mp3"}/>  
                                </audio>
                                <DeleteButton onClick={() => {if (window.confirm(`Deseja deletar a música ${track.name}?`)) this.deletePlaylistTrack(track.id)}}>Deletar música</DeleteButton>
                                <NewHr />
                            </Container>
                        )
                    })}
                    <Button onClick={this.onClickAddMusic} >Adicionar música a playlist {this.props.playlistName}</Button>
                    <Hr />                    
                </Container>
            )
        }
    }
}

export default PlaylistDetails;