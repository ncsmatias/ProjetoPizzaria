import React from 'react';
import { Content } from './style/cardapio';
import { Carousel } from 'antd';
import Pizza1 from './imagens/canadian-bacon-pizza.jpg'
import Pizza2 from './imagens/download.jpg'
import Pizza3 from './imagens/maxresdefault.jpg'
import Pizza4 from './imagens/photo0jpg.jpg'
import Pizza5 from './imagens/pizza-hut-bacon-barbecue-768x307-3e434a40.jpg'
import { Divider } from 'antd';


export default function Inicio() {
    return (
        <Content>
            <Carousel autoplay>
                <div className="itens">
                    <img className="imagemPizza" src={require('./imagens/canadian-bacon-pizza.jpg')} />
                    <h1 className="tituloCardapio">Canadian Bacon</h1>
                    <div className="textoCarp"><p className="textoCardapio">
                        A Pizza Canadense é um dos sabores de pizza da Sertão na Lenha Pizzaria, considerada uma das melhores pizzarias em Salvador, e assada em forno à lenha. A pizza leva molho, lombo, mussarela, e bacon como ingredientes. O preparo da pizza leva aproximadamente 20 min e, para muitos, é a melhor pizza de Salvador e está entre os sabores de pizza preferido dentre os clientes da Sertão na Lenha Pizzaria. A Pizza Canadense é um sabor de pizza tradicional e se diferencia das pizzas doces, pizzas light e pizzas especiais devido a utilização de recheios tipicamente tradicionais.
                    </p>
                    </div>
                </div >
                <div>
                    <img className="imagemPizza" src={require('./imagens/download.jpg')} />
                    <h1 className="tituloCardapio">Toscana</h1>
                    <p className="textoCardapio">
                        Toscana. Ingredientes: Molho de tomate, mussarela, calabresa ralada, bacon, tomate, azeitona e orégano. Mais uma tradição da Itália, a Toscana da Rede Leve Pizza com muita calabresa ralada e bacon vai levar um sabor diferenciado para sua mesa.
                    </p>

                </div>
                <div>
                    <img className="imagemPizza" src={require('./imagens/maxresdefault.jpg')} />
                    <h1 className="tituloCardapio">Frango de Calafrango com catupiry</h1>
                    <p className="textoCardapio">
                        Deliciosa Pizza feita com fango, catupiry, queijo mussarela, molho de tomate, calabresa, cebola e orenago também não podem faltar
                    </p>

                </div>
                <div>
                    <img className="imagemPizza" src={require('./imagens/photo0jpg.jpg')} />
                    <h1 className="tituloCardapio">A moda da casa</h1>
                    <div className="textoCarp"><p className="textoCardapio">
                        Uma Pizza com os melhores sabores da casa. Tem mussarela, portuguesa, calabresa e manjeirição. Ótimo pedido quando estão indecisos
                    </p>
                    </div>

                </div>
                <div>
                    <img className="imagemPizza" src={require('./imagens/pizza-hut-bacon-barbecue-768x307-3e434a40.jpg')} />
                    <h1 className="tituloCardapio">Bacon Americano</h1>
                    <p className="textoCardapio">
                        A Pizza Americana tem o presunto, champignon e requeijão salpicado com bacon crocante por cima. Impossível não querer! A clássica Pizza de Bacon tem a simplicidade do bacon crocante disposto sobre a muçarela ou requeijão.
                    </p>

                </div>
            </Carousel >,
        </Content >
    );
}