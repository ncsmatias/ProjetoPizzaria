import React from "react";
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const { TextArea } = Input;

const onChange = e => {
    console.log(e);
};

function App() {



    return (

        <div className="contato">
            <form className="form">
                <h1 className="titulo">Fale Conosco</h1>
                <div style={{ display: "inline-block" }} className="nome"><Input size="small" placeholder="Nome" prefix={<UserOutlined />} size="middle" /></div>
                <div style={{ display: "inline-block" }} className="email"><Input size="small" placeholder="Email" prefix={<UserOutlined />} className="email" size="middle" /></div>
                <div className="comentario"><TextArea placeholder="Comentário" allowClear onChange={onChange} /></div>
                <div className="botao"><Button>Enviar</Button></div>
            </form>
        </div>
    );
}

export default App;