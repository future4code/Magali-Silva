import React from 'react';
import axios from 'axios';
import { baseUrl, headers } from '../constants/axiosConstants'
import styled from 'styled-components';



class createPlaylist extends React.Component {
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
            <div>
                <h2>Crie uma playlist</h2>
                <input 
                    placeholder={"Nome da playlist"} 
                    onChange={this.controlInput}
                />
                <button
                    onClick={this.createPlaylist}
                >Criar</button>
            </div>
        );
  }
  
}

export default createPlaylist;