import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import GlobalStyle from './styles';
import Principal from './views/Principal';
import Header from './views/header/header';
import Contato from './views/contato/contato';
import Cardapio from './views/cardapio/cardapio';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Principal />
      <Cardapio />
      <Contato />


    </BrowserRouter>
  );

}

export default App;

