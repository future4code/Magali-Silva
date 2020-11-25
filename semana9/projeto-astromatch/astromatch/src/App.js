import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import { baseUrl, student } from './constants/axiosConstants'
import styled from 'styled-components'
import Home from './screens/Home/Home'
import Matches from './screens/Matches/Matches'

const Container = styled.div`
  background-color: rgba(150, 150, 150, .5);

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  position: fixed;
  bottom: 5px;
  right: 5px;
`

function App() {
  const [ screen, setScreen ] = useState(true)
  
  const onClickClear = () => {
    axios.put(`${baseUrl}:${student}/clear`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  const onClickScreen = () => {
    setScreen(!screen)
  }

  const switchScreen = screen ? <Home onClick={onClickScreen} /> : <Matches onClick={onClickScreen} />
 
  return (
    <Container>
      {switchScreen}
      <Button onClick={onClickClear} >Limpar swipes e matches</Button>
    </Container>
  );
}

export default App;
