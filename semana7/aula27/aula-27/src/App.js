import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    listaTiposPokemons: [],    
    
  }

  pegarTipos = () => {
    axios.get("https://pokeapi.co/api/v2/type/")
      .then((resposta) => {
        this.setState({ listaTiposPokemons: resposta.data.results });
        console.log(resposta)
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  

  componentDidMount() {
    this.pegarTipos()
  }

  render() {
    return (
      <div>        
        <h3>Escolha o tipo de pokemon que você deseja</h3>
          <select>
            <option>teste</option>
            {this.state.listaTiposPokemons.map((tipo) => {
              return (
                <option
                  key={tipo.name}                  
                  url={tipo.url}
                > {tipo.name} </option>
              )
            })}
          </select>
      </div>
    );
  }
}

export default App;
