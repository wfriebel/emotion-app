import React, { Component } from 'react';
import './styles.scss';
import GetStartedButton from './components/GetStartedButton';

export default class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div className="Welcome__title-container"> 
          <h1 className="Welcome__title">Welcome</h1>
          <h2 className="Welcome__sub-title">Keepin' it Feel</h2>
        </div>
        <GetStartedButton 
          navigatePage={this.props.navigatePage}
        />
      </div>
    )
  }
}
