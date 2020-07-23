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
                    <img src={Pizza1} alt="Pizza Canadense com Bacon" className="imgPizza" />

                </div >
                <div>
                    <img src={Pizza2} alt="Alguma coisa" className="imgPizza" />
                </div>
                <div>
                    <img src={Pizza3} alt="Alguma coisa" className="imgPizza" />
                </div>
                <div>
                    <img src={Pizza4} alt="Alguma coisa" className="imgPizza" />
                </div>
                <div>
                    <img src={Pizza5} alt="Alguma coisa" className="imgPizza" />
                </div>
            </Carousel >,
        </Content >
    );
}