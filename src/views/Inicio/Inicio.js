import React from 'react';
import { Content } from './styles/inicio';
import { Carousel } from 'antd';

export default function Inicio() {
  return (
    <Content>
      <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>,
    </Content>
  );
}