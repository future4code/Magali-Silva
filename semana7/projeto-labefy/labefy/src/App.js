import React from 'react';
import './App.css';
// import axios from 'axios';
// import { baseUrl, headers } from './constants/axiosConstants'
// import styled from 'styled-components';
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
        <div>
          <CreatePlaylist/>
          <button onClick={this.onClickList}>Ver playlists</button>
          
        </div>
      );
    } else {
      return (
        <div>
          <CreatePlaylist/>
          <button onClick={this.onClickList}>Ver playlists</button>
          <Playlists/>
        </div>
      );
    }

    
  }
  
}

export default App;
