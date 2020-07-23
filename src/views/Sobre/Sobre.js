import React from 'react';

import { Content, Hagaerri } from './styles/sobre';

import { Carousel } from 'antd';

export default function Sobre() {

return (

<Content>
    
    <div className = "titulotrsite">
    
    <h1> Pizzaria da EJcomp </h1>
    
    </div>

    <div className = "texto">

     <p>Desde 2010 servindo as melhores pizzas de presidente prudente, começamos com uma simples pizzaria e poucos 
     funcionarios, mal tinhamos um caixa, não podiamos fazer entregas, nossa infraestrutura não era das melhores mas com a dedicação, talento, e perseverança hoje estamos com uma ampla infraestrutura para atender a todos os pedidos da região, agora com o nosso novo site todos poderão saber sobre a melhor pizzaria da região.</p>

    </div>

    <div className = "titulotrsite">

     <h1> A nossa cozinha </h1>

    </div>

    <Carousel autoplay>

    <div className="imagem">

        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0b/00/e7/0a/sabor-vaipira-cozinha.jpg" width="660" height="350"></img>

     </div>

     <div>

        <img src="https://pizzariadesucesso.com/wp-content/uploads/2018/09/pizzaria-1280x720.jpg" width="660" height="350"></img>

     </div>
        
    </Carousel>

    <div className = "texto">

      <p>Sempre haviam dificuldades com a cozinha, especialmente com o forno, muitas vezes nós não consiguiamos dar conta dos pedidos pelo fato de termos apenas 1 forno para pizzas além do espaço minusculo para fazer o preparo delas, ingredientes eram limitados e também não tinhamos uma grande variedade de cardápio devivdo aos limites que os equipamentos disponiveis nos davam, mas hoje tudo mudou, temos tudo oque precisamos e não vamos parar por ai, vamos espandir sempre para trazer a maior variedade de pizzas para todos os nossos clientes.</p>

    </div>

    <hr></hr>

    <div className = "titulotrsite">

     <h1> Nossos funcionarios </h1>

    </div>

    <Carousel autoplay>

    <div className="imagem">

        <img src="https://informa.life/wp-content/uploads/2020/04/Revista-Aquarius-Life-116-pizza-Xama.jpg
" width="660" height="350"></img>

     </div>

     <div>

        <img src="https://st3.depositphotos.com/12985790/19363/i/450/depositphotos_193633204-stock-photo-multiracial-team-cooks-looking-camera.jpg
" width="660" height="350"></img>

     </div>
        
    </Carousel>

    <div className = "texto">

     <p>Profissionais qualificados no ramo de gastronomia, competentes e habéis no serviço, sem eles a nossa pizzaria não é nada, eles são responsavéis pelo sucesso que tivemos e teremos futuramente, eles estão prontos para anotar, realizar e entregar o seu pedido em qualquer lugar da região.</p>

    </div>

    <hr></hr>

    
    
</Content>

);


}




