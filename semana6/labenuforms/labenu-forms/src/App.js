import React from 'react';
import './App.css';

import styled from 'styled-components';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'

const ContainerFormulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    const etapaAtual = this.state.etapa

    switch (etapaAtual) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
    }
  }

  onClickProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }

  render() {
    return (
      <ContainerFormulario>
        {this.renderizaEtapa()}
        { (this.state.etapa !== 4) && ( <button onClick={this.onClickProximaEtapa}>Próxima etapa</button> )}
      </ContainerFormulario>
    );

  }
}

export default App;
