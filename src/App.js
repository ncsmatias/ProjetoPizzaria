import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import GlobalStyle from './styles';
import Principal from './views/Principal';
import Header from  './views/header/header';
import Sobre from './views/sobre/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Principal />
      <Sobre />
    </BrowserRouter>
  );
}

export default App;

