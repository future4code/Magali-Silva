import React from 'react';
import './App.css';
import ListaUsuarios from './components/ListaUsuarios';
import CadastroUsuario from './components/CadastroUsuario';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 100px;
`

const Botao = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
`

class App extends React.Component {
  state = {
    clickBotaoLista: false
  }  

  onClickLista = () => {
    this.setState({
      clickBotaoLista: !this.state.clickBotaoLista
    })
  }

  render() {
    const listaClicada = this.state.clickBotaoLista;

    if (!listaClicada) {
      return (
        <Container>
          <Botao onClick={this.onClickLista}>Ir para lista de usuários</Botao>                    
          <CadastroUsuario/>  
        </Container>
      );
    } else {
      return (
        <Container>
          <Botao onClick={this.onClickLista}>Ir para cadastro de usuários</Botao> 
          <ListaUsuarios/>            
        </Container>
      );
    }
  }
}

export default App;
