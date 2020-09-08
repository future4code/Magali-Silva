import React from 'react';
import axios from 'axios';
import { baseUrl, headers } from '../constants/axiosConstants'
import { Container, DeleteButton, Title, Link } from '../style/style'
import PlaylistDetails from '../components/PlaylistDetails'

class Playlists extends React.Component {
    state = {
        playlists: [],
        clickedPlaylist: false,
        
    };

    getPlaylists = () => {
        axios.get( baseUrl, headers )
            .then((response) => { 
                this.setState({ playlists: response.data.result.list })
            })
            .catch((error) => {
                console.log(error)
            })
    };
    
    deletePlaylist = (id) => {

        console.log(id)

        axios.delete(`${baseUrl}/${id}`, headers)
            .then((response) => {
                alert("Playlist removida com sucesso")
                this.getPlaylists()
            })
            .catch((error) => {
                alert("Ocorreu um erro ao tentar deletar a playlist")
            })
    }

    componentDidMount = () => {
        this.getPlaylists() 
    }

    onClickPlaylistDetails = () => {
        this.setState({ clickedPlaylist: !this.state.clickedPlaylist })
        
    }


    render() {
                
        return (
            <Container flexDirection={"column"} padding={"50px 0px"}>
                <Title>Suas playlists</Title>
                
                {this.state.playlists.map((item) => {
                    if (this.state.clickedPlaylist) {
                                                
                        return (
                            <PlaylistDetails
                                key = {item.name}
                                id={item.id}
                                playlistName={item.name}
                            />
                        )
                    } else {
                        return (
                            <Container flexDirection={"row"} key={item.id} width={"400px"} justifyContent={"space-between"}>
                                <Link onClick={this.onClickPlaylistDetails}>{item.name}</Link>
                                <DeleteButton
                                    onClick={() => {if (window.confirm(`Tem certeza de que deseja deletar a playlist ${item.name}?`)) {this.deletePlaylist(item.id) } } } 
                                > X </DeleteButton>
                            </Container>                   
                        )
                    }
                })}
                
            </Container>
        );
    }
}

export default Playlists;