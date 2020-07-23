import React from 'react';

//material-ui
import Card from '@material-ui/core/Card';
//

import _ from './paragraph.css';

const SobreCard = props => {

    const { src, nome } = props;

    return (
        <Card style={cardStyle}>
            <div style={imgContainerStyle}>
                <img style={imgStyle} src={src} />
            </div>
            <div style={paragraphContainerStyle}>
                <p className='paragraph'>{nome}</p>
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
    height: '75%',
    width: '100%'
}

const paragraphContainerStyle = {
    height: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const imgStyle = {
    height: '85%',
    width: '50%',
    borderRadius: '50%'
}

export default SobreCard;