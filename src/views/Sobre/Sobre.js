import React from 'react';

import { Content, Hagaerri } from './styles/sobre';

import { Carousel } from 'antd';

export default function Sobre() {

return (

<Content>
    
    <div class = "titulotrsite">
    
    <h1> Pizzaria da EJcomp </h1>
    
    </div>

    <div class = "texto">

     <p>Desde 2010 servindo as melhores pizzas de presidente prudente, começamos com uma simples pizzaria e poucos 
     funcionarios, mal tinhamos um caixa, não podiamos fazer entregas, nossa infraestrutura não era das melhores mas com a dedicação, talento, e perseverança hoje estamos com uma ampla infraestrutura para atender a todos os pedidos da região, agora com o nosso novo site todos poderão saber sobre a melhor pizzaria da região.</p>

    </div>

    <div class = "titulotrsite">

     <h1> A nossa cozinha </h1>

    </div>

    <Carousel autoplay>

    <div class="imagem">

        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0b/00/e7/0a/sabor-vaipira-cozinha.jpg" width="660" height="350"></img>

     </div>

     <div>

        <img src="https://pizzariadesucesso.com/wp-content/uploads/2018/09/pizzaria-1280x720.jpg" width="660" height="350"></img>

     </div>
        
    </Carousel>

    <div class = "texto">

      <p>Sempre haviam dificuldades com a cozinha, especialmente com o forno, muitas vezes nós não consiguiamos dar conta dos pedidos pelo fato de termos apenas 1 forno para pizzas além do espaço minusculo para fazer o preparo delas, ingredientes eram limitados e também não tinhamos uma grande variedade de cardápio devivdo aos limites que os equipamentos disponiveis nos davam, mas hoje tudo mudou, temos tudo oque precisamos e não vamos parar por ai, vamos espandir sempre para trazer a maior variedade de pizzas para todos os nossos clientes.</p>

    </div>

    <hr></hr>

    <div class = "titulotrsite">

     <h1> Nossos funcionarios </h1>

    </div>

    <Carousel autoplay>

    <div class="imagem">

        <img src="https://informa.life/wp-content/uploads/2020/04/Revista-Aquarius-Life-116-pizza-Xama.jpg
" width="660" height="350"></img>

     </div>

     <div>

        <img src="https://st3.depositphotos.com/12985790/19363/i/450/depositphotos_193633204-stock-photo-multiracial-team-cooks-looking-camera.jpg
" width="660" height="350"></img>

     </div>
        
    </Carousel>

    <div class = "texto">

     <p>Profissionais qualificados no ramo de gastronomia, competentes e habéis no serviço, sem eles a nossa pizzaria não é nada, eles são responsavéis pelo sucesso que tivemos e teremos futuramente, eles estão prontos para anotar, realizar e entregar o seu pedido em qualquer lugar da região.</p>

    </div>

    <hr></hr>

    <div class = "titulotrsite">

      <h1>A melhor parte</h1>

    </div>

    <Carousel autoplay>

    <div class="imagem">

        <img src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f000010ZDNXEA4/5c001711e4b00010cfa42363.jpg&w=710&h=462
" width="660" height="350"></img>

     </div>

     <div>

        <img src="https://media-cdn.tripadvisor.com/media/photo-p/14/fd/54/11/photo0jpg.jpg" width="660" height="350"></img>

     </div>

     <div>

        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/6e/04/71/canadian-bacon-pizza.jpg

" width="660" height="350"></img>

     </div>

     <div>

        <img src="https://i.ytimg.com/vi/qmoCVX19W_o/maxresdefault.jpg

" width="660" height="350"></img>

     </div>
        
    </Carousel>

    <div class = "texto">

     <p> as nossas maravilhosas pizzas de sabores inimaginaveis, desde quando começamos a fazer pizzas nós sempre ivestimos na criação e aperfeiçoação de sabores, numca estamos satisfeitos com oque temos e com isso sempre buscamos aprimorar à perfeição, porque não experimentar de uma das deliciosas pizzas que temos?</p>

    </div>

    

    <div class = "texto">

   <p> para poder desfrutar desse prazer consulte nosso cardápio, logo abaixo e sinta o melhor sabor que ja esperimentastes em sua vida </p>

    </div>

</Content>

);


}




