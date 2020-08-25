import React from 'react';
import './App.css';
import axios from 'axios';
import ListaUsuarios from './components/ListaUsuarios';

class App extends React.Component {
  state = {
    valorInputName: '',
    valorInputEmail: '',
    clickBotaoLista: false
  }

  cadastrarUsuario = () => {
    const body = {
      name: this.state.valorInputName,
      email: this.state.valorInputEmail
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "magali-silva-jackson"
        }
      }
    );

    request
      .then((resposta) => {
        alert(`O usuário ${this.state.valorInputName} foi cadastrado com sucesso!`)
        this.setState({ 
          valorInputName: '',
          valorInputEmail: ''
         })
      })
      .catch((erro) => {
        console.log("Erro ao cadastrar usuário.")
      }
    );
  };

  onClickLista = () => {
    this.setState({
      clickBotaoLista: !this.state.clickBotaoLista
    })
  }

  render() {
    const onChangeInputName = (event) => {
      this.setState({        
        valorInputName: event.target.value        
      })
    };

    const onChangeInputEmail = (event) => {
      this.setState({
        valorInputEmail: event.target.value
      })
    };

    const listaClicada = this.state.clickBotaoLista;

    if (!listaClicada) {
      return (
        <div>
          <div>
            <label>Nome:</label><input value={this.state.valorInputName} onChange={onChangeInputName} />
            <label>E-mail:</label><input value={this.state.valorInputEmail} onChange={onChangeInputEmail} />
            <button onClick={this.cadastrarUsuario}>Salvar</button>
          </div>   
  
          <button onClick={this.onClickLista} >Ir para lista de usuários</button>                    
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.onClickLista}>Ir para cadastro de usuários</button> 
          <ListaUsuarios/>            
        </div>
      );
    }

    
  }
}

export default App;
