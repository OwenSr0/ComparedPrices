import React from 'react';
import { Container } from '@mui/material';
import Headerr from './containers/Header/index'
import './App.css';


const stackHeader = {
  paddingLeft: {x:'0',m:'0',lg:'0'},
  paddingRight: {x:'0',m:'0',lg:'0'}
}

function App() {
  return (
    <Container>
      <Headerr></Headerr>
      
    </Container>
  );
}

export default App;
