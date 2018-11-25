import React, { Component } from 'react';
import './styles.scss';

export default class StartOverButton extends Component {
  handleClick = e => {
    this.props.startOver();
  }

  render() {
    return (
      <div className="StartOverButton">
        <button className="StartOverButton__button" onClick={this.handleClick}>Start Over</button>
      </div>
    )
  }
}
