import React, { Component } from 'react';
import './styles.scss';

export default class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div> 
          <h1 className="Welcome__title">Welcome</h1>
          <h2 className="Welcome__sub-title">Keepin' it Feel</h2>
        </div>
      </div>
    )
  }
}
