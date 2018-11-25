import React, { Component } from 'react';
import './styles.scss';

export default class NextPageButton extends Component {
  handleClick = e => {
    this.props.navigatePage('forwards');
  }

  render() {
    return (
      <div className="NextPageButton">
        <button className="NextPageButton__button" onClick={this.handleClick}>{this.props.buttonText}</button>
      </div>
    )
  }
}
