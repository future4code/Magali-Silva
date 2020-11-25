import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme'
import Header from './components/Header/Header';
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 80px;
`

function App() {
  const token = localStorage.getItem("token")
  const [buttonName, setButtonName] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header buttonName={buttonName} setButtonName={setButtonName}/>
        <Container>
          <Router setButtonName={setButtonName} />
        </Container>
      </BrowserRouter>      
    </ThemeProvider>
  );
}

export default App;
