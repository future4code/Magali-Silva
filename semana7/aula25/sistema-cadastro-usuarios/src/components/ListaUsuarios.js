import React from 'react';
import axios from 'axios';

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
        console.log("Deletou usuario")
        this.pegarUsuarios()
      })
      .catch((erro) => {
        console.log(erro)
      }
    )
  }


  componentDidMount() {
    this.pegarUsuarios();
  }

  render() {
    return (
      <div>
        <h1>Lista de usuários</h1>
        {this.state.listaUsuarios.map((usuario) => {
          return (
            <div>
              <p key={usuario.id} >{usuario.name}</p>
              <button onClick={() => this.deletarUsuario(usuario.id)} >Deletar usuário</button>
            </div>
          )
        })
        }
      </div>
    );
  }
}

export default ListaUsuarios;
