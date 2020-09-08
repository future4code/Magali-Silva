import React from 'react';
import './App.css';
import { Container, Image, Link } from './style/style'
import image from './img/labefy.png'
import CreatePlaylist from './components/CreatePlaylist'
import Playlists from './components/Playlists'

class App extends React.Component {
  state = {
    click: false
  }

  onClickList = () => {
    this.setState({
      click: !this.state.click
    })
  }

  render() {
    const clickedList = this.state.click

    if (!clickedList) {
      return (
        <Container flexDirection={"column"}>
          <Image src={image} heightImage={"15vh"}/>
          <CreatePlaylist/>
          <Link onClick={this.onClickList}>Veja suas playlists</Link>          
        </Container>
      );
    } else {
      return (
        <Container flexDirection={"column"} >
          <Image src={image} heightImage={"10vh"}/>
          <Playlists/>
          <Link onClick={this.onClickList}>Criar playlist</Link>
        </Container>
      );
    }

    
  }
  
}

export default App;
