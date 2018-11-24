import React, { Component } from 'react';
import './styles.scss';

export default class GetStartedButton extends Component {
  handleClick = e => {
    this.props.navigatePage('forwards');
  }

  render() {
    return (
      <div className="GetStartedButton">
        <button className="GetStartedButton__button" onClick={this.handleClick}>Get Started</button>
      </div>
    )
  }
}
