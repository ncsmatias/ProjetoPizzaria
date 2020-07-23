import React from 'react';

//material-ui
import Card from '@material-ui/core/Card';
//

const SobreCard = props => {

    const { src, nome } = props;

    return (
        <Card style={cardStyle}>
            <div style={imgContainerStyle}>
                <img style={imgStyle} src={src} />
            </div>
            <div style={{height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p style={paragraphStyle}>{nome}</p>
            </div>
        </Card>
    )
};

const cardStyle = {
    height: '100%',
    backgroundColor: '#ff5d00',
    borderRadius: '5%'
}

const imgContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '100%'
}

const imgStyle = {
    height: '85%',
    width: '50%',
    borderRadius: '50%'
}

const paragraphStyle = {
    margin: '0',
    fontWeight: 'bold',
    letterSpacing: '0.2em',
    fontSize: '20px',
    fontStyle: 'roboto'
}

export default SobreCard;