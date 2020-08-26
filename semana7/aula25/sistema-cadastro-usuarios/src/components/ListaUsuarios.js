import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const ContainerUsuario = styled.div`
  display: flex;
  justify-content: space-between;

  width: 300px;

  border-bottom: solid 1px;
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
  }
  
  pegarUsuarios = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
      {
        headers: {
          Authorization: "magali-silva-jackson"
        }
      }
    );

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
    const request = axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "magali-silva-jackson"
        }
      }
    );

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

  render() {
    return (
      <div>
        <h2>Usuários Cadastrados:</h2>
        {this.state.listaUsuarios.map((usuario) => {
          return (
            <ContainerUsuario>
              <p key={usuario.id} >{usuario.name}</p>
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
        })
        }
      </div>
    );
  }
}

export default ListaUsuarios;
