import React from 'react';
import axios from 'axios';
import { baseUrl, headers } from '../constants/axiosConstants'
import styled from 'styled-components';


class PlaylistDetails extends React.Component {
    state = {
        tracks: []
    }

    getPlaylistTracks = (id) => {
        
        axios.get(`${baseUrl}/${id}/tracks`, headers, id )
            .then((response) => {
                this.setState({ tracks: response.data.result.tracks })
            })
            .catch((error) => {
                alert("Ocorreu um erro")
            })
    }

    componentDidMount = () => {
        this.getPlaylistTracks()
    }

    render() {
        return (
            <div>
                <h2>Detalhes da playlist</h2>
                <p> Playlist:  </p>
                {this.state.tracks.map((track) => {
                    return(
                        <div key={track.id}>
                            <p> {track.name} </p>
                            <p> {track.artist} </p>
                            <button>Deletar</button>
                            <audio controls>
                                <source src={track.url}/>  
                            </audio>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PlaylistDetails