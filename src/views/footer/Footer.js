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

                </div>
                <div className="gomo">
                    <p className="textoTitulo">
                    Localização
                    </p>

                </div>
                <div className="gomo">
                    <p className="textoTitulo">
                    Contato
                    </p>

                </div>

            </div>
        )
    }
}
