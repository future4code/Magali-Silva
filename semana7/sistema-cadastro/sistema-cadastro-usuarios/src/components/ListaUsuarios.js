import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { baseUrl, headers } from '../constants/constantesAxios';
import TelaUsuario from './TelaUsuario'

const ContainerUsuario = styled.div`
  display: flex;
  justify-content: space-between;

  width: 300px;

  border-bottom: solid 1px;
`
const Usuario = styled.button`
    background-color: transparent;
    border: none;
    outline: none;

    :hover {
        font-weight: bold;
        cursor: pointer;
    }
`

const Deletar = styled.button`
  background-color: transparent;
  color: red;
  border: none;
  outline: none;

  :hover {
    font-weight: bold;
    cursor: pointer;
  }
`

class ListaUsuarios extends React.Component {
    state = {
        listaUsuarios: [],
        usuarioClicado: false,
        botaoVoltar: false
    }
      
    pegarUsuarios = () => {
        const request = axios.get( baseUrl, headers );

        request
            .then((resposta) => {
            this.setState({ listaUsuarios: resposta.data })        
            })
            .catch((erro) => {
            console.log(erro)
            }
        )
    };
    
    deletarUsuario = (id) => {
        const request = axios.delete( `${baseUrl}/${id}`, headers);
    
        request
          .then((resposta) => {
            alert("Usuário removido com sucesso")
            this.pegarUsuarios()
          })
          .catch((erro) => {
            alert("Ocorreu um erro ao tentar remover o usuário")
          }
        )
    }
    
    
    componentDidMount() {
    this.pegarUsuarios();
    }
    
    detalheUsuario = (id) => {
        this.setState({
            usuarioClicado: !this.state.usuarioClicado
        })
        console.log('clicou no usuario')
    }
    
    render() {
        const clickUsuario = this.state.usuarioClicado
        
        if (!clickUsuario) {
            return (
                <div>
                    <h2>Usuários Cadastrados:</h2>
                    {this.state.listaUsuarios.map((usuario) => {                 
                        return (
                            <ContainerUsuario onClick={this.detalheUsuario}>
                                <Usuario key={usuario.id} >{usuario.name}</Usuario>
                                <Deletar 
                                    onClick={
                                        () => {
                                            if (window.confirm(`Tem certeza de que deseja deletar ${usuario.name}?`)) {
                                                this.deletarUsuario(usuario.id)
                                            }
                                        }
                                    } 
                                > X </Deletar>
                            </ContainerUsuario>
                        )               
                    })}
                </div>
            )
        } else {
            return (                            
                <div>
                    <TelaUsuario/>
                    <button onClick={() => this.detalheUsuario()}>Voltar para lista de usuários</button>
                </div>
            )               
        }
    }
}

export default ListaUsuarios;