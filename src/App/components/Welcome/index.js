import React, { Component } from 'react';
import './styles.scss';
import GetStartedButton from './components/GetStartedButton';
import Logo from './images/logo.png';

export default class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <img className="Welcome__logo" src={Logo} alt="Keepin it Feel"/>
        <GetStartedButton 
          navigatePage={this.props.navigatePage}
        />
      </div>
    )
  }
}
