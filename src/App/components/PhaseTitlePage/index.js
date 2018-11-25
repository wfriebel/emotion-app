import React, { Component } from 'react';
import './styles.scss';

export default class PhaseTitlePage extends Component {
  render() {
    return (
      <div className="PhaseTitlePage">
        <h1 className="PhaseTitlePage__title">Phase {this.props.phase}</h1>
        <h2 className="PhaseTitlePage__subtitle">{this.props.subtitle}</h2>
      </div>
    )
  }
}
