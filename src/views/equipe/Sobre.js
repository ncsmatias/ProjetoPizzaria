import React from 'react';

//material-ui'
import Grid from '@material-ui/core/Grid';
//

import SobreCard from './SobreCard';
import _ from './background.css';

import ScrollAnimation from 'react-animate-on-scroll'


const Sobre = () => {
  return (
    <div className='background' id="equipe">
      <Grid container>
        <Grid item md={12}>
          <div style={titleContainerStyle}>
            <p style={titleStyle}>EQUIPE</p>
          </div>
        </Grid>
        <Grid item md={4} xs={12} style={gridStyle}>
          <ScrollAnimation animateIn='fadeInDown' duration={3} style={cardWrapperStyle}>
            <SobreCard
              src={require('./imagens/14680889_905351222933419_6814559744953235941_o.jpg')}
              nome='DAVID JUNIOR'
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={4} xs={12} style={gridStyle}>
          <ScrollAnimation animateIn='fadeInDown' duration={3} style={cardWrapperStyle}>
            <SobreCard
              src={require('./imagens/62258427_873262713072212_3061584423825702912_n.jpg')}
              nome='LEONARDO HIGUTI'
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={4} xs={12} style={gridStyle}>
          <ScrollAnimation animateIn='fadeInDown' duration={3} style={cardWrapperStyle}>
            <SobreCard
              src={require('./imagens/87400686_2786920978088941_8822690998757883904_n.jpg')}
              nome='GUILHERME DE AGUIAR'
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={4} xs={12} style={gridStyle}>
          <ScrollAnimation animateIn='fadeInUp' duration={3} style={cardWrapperStyle}>
            <SobreCard
              src={require('./imagens/pp.jpeg')}
              nome='GABRIEL CAETANO'
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={4} xs={12} style={gridStyle}>
          <ScrollAnimation animateIn='fadeInUp' duration={3} style={cardWrapperStyle}>
            <SobreCard
              src={require('./imagens/a798d50e-15e2-48f2-bc09-9ae0bb38a1a9.jpeg')}
              nome='NICOLAS MATIAS'
            />
          </ScrollAnimation>
        </Grid>
        <Grid item md={4} xs={12} style={gridStyle}>
          <ScrollAnimation animateIn='fadeInUp' duration={3} style={cardWrapperStyle}>
            <SobreCard
              src={require('./imagens/66854325_2502039146514334_6834003119303557120_n.jpg')}
              nome='GUILHERME MOLINA'
            />
          </ScrollAnimation>
        </Grid>
      </Grid>
    </div>
  )
}

const titleContainerStyle = {
  display: 'flex',
  justifyContent: 'center'
}

const titleStyle = {
  fontSize: '100px',
  fontWeight: 'bold',
  letterSpacing: '0.25em',
  color: 'pink'
}

const gridStyle = {
  display: 'flex',
  justifyContent: 'center'
}

const cardWrapperStyle = {
  width: '75%',
  height: '300px',
  marginBottom: '15%'
}

export default Sobre;