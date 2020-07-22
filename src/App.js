import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import GlobalStyle from './styles';
import Principal from './views/Principal';
import Header from  './views/header/header';
import Footer from './views/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Principal />
      <Footer />
    </BrowserRouter>
  );

}

export default App;

