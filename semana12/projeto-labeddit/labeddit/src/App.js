import React from 'react';
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
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Container>
          <Router/>
        </Container>
      </BrowserRouter>      
    </ThemeProvider>
  );
}

export default App;
