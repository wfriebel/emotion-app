import React, { Component } from 'react';
import './styles.scss';
import NextPageButton from '../NextPageButton';
import Logo from './images/logo.png';

export default class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <img className="Welcome__logo" src={Logo} alt="Keepin it Feel"/>
        <p className="Welcome__subtitle">This reflection exercise is for understanding your emotions and how you react in different situations. As you answer the questions, our hope is that you gain a better understanding of your emotions in response to the world around you. This exercise works best if you’re currently experiencing the emotions or have recently experienced them.</p>
        <NextPageButton 
          navigatePage={this.props.navigatePage}
          buttonText="Get Started"
        />
      </div>
    )
  }
}
