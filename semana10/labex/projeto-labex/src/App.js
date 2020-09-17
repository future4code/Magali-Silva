import React from 'react';
import './App.css';
import Router from './router/Router';
import styled from 'styled-components';
import background from './assets/img/space.jpg';

const Div = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  background-origin: border-box;
  background-position: initial;
`

const App = () => {

  return (
    <Div>
      <Router />
    </Div>
  );
}

export default App;
