import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import GlobalStyle from './styles';
import Principal from './views/Principal';
import Header from  './views/header/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Principal />

    </BrowserRouter>
  );

}

export default App;

