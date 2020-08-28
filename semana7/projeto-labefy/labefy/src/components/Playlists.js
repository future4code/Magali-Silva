import React from 'react';
import axios from 'axios';
import { baseUrl, headers } from '../constants/axiosConstants'
import styled from 'styled-components';
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

        if (this.state.clickedPlaylist) {
           return (
            <PlaylistDetails
                
            />
           )           
        } else {
            return (
                <div>
                    <h2>Playlists</h2>
                    {this.state.playlists.map((item) => {
                        return (
                            <div key={item.id}>
                                <p 
                                    onClick={this.onClickPlaylistDetails}   
                                                        
                                >{item.name}</p>
                                <button
                                    onClick={() => {if (window.confirm(`Tem certeza de que deseja deletar a playlist ${item.name}?`)) {this.deletePlaylist(item.id) } } } 
                                >Deletar</button>
                            </div>                   
                        )
                    })}
                </div>
            );
        }
    }
  
}

export default Playlists;