import React, { Component } from 'react'
import footer from '../footer/footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div id="footerBar" className="footerBar">

        <div className="gomo">
          <img className="imagemFooter" src={require('./pizzaLogo1.png')} />
          <p className="textoPadrao">
            Um texto aqui sobre a pizzaria Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel eleifend massa, nec fringilla ex. Suspendisse sit amet lacus pretium, euismod urna sed, rhoncus magna. Donec sagittis tortor convallis, vehicula risus ac, sodales leo. Integer neque justo.
                    </p>
        </div>
        <div className="gomo">

          <p className="textoTitulo">
            Menu
            </p>

          <a href="#">
            <p className="textoPadrao">
              -Home
                    </p>
          </a>
          <a href="#cardapio">
            <p className="textoPadrao">
              -Cardápio
                    </p>
          </a>
          <a href="#">
            <p className="textoPadrao">
              -Sobre Nós
                    </p>
          </a>
          <a href="#footerBar">
            <p className="textoPadrao">
              -Contato
                    </p>
          </a>



        </div>
        <div className="gomo">
          <p className="textoTitulo">
            Localização
                    </p>
          <p className="textoPadrao">
            Rua dos Alfeneiros, N° 40
                    </p>
          <p className="textoPadrao">
            Bairro Humberto Salvador
                    </p>
          <p className="textoPadrao">
            Presidente Prudente, SP
                    </p>
          <p className="textoPadrao">
            umemailqualquer@gmail.com
                    </p>

        </div>
        <div className="gomo">
          <p className="textoTitulo">
            Contato
                    </p>
          <img className="iconeContato" src={require('./email icon.png')} />
          <p className="textoPadrao">
            umemailqualquer@gmail.com
                    </p>
          <img className="iconeContato" src={require('./zap.png')} id='zap' />
          <p className="textoPadrao">
            (18) 99045 3898
                    </p>
          <img className="iconeContato" src={require('./zap.png')} id='zap' />
          <p className="textoPadrao">
            (18) 3900 5578
                    </p>
          <img className="iconeContato" src={require('./mapa.png')} id='mapa' />
          <p className="textoPadrao">
            Veja no mapa
                    </p>
          <p className="textoPadrao">

          </p>

        </div>

      </div>
    )
  }
}
