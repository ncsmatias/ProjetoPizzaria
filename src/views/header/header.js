import React from 'react';
import logo from './pizza.png';

function App() {
  return (
    <div className="App">
      <div className="container center">
        <nav className="menu">
           <h1 style={
              {
                backgroundImage: 'url(' + logo + ')'
              }
            }className="menu__logo">PizzariaEJ</h1>

            <div className="menu__right">
                <ul className="menu__list">
                    <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Sobre</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Cardápio</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Local</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Contato</a></li>
                </ul>
            </div>
        </nav>
    </div>
    </div>
  );
}

export default App;
