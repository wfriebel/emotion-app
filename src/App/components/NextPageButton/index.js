import React, { Component } from 'react';
import './styles.scss';

export default class NextPageButton extends Component {
  handleClick = e => {
    this.props.navigatePage('forwards');
  }

  render() {
    const { color } = this.props;
    return (
      <div style={color ? { backgroundColor: color } : {}} className="NextPageButton">
        <button style={color ? { backgroundColor: color } : {}} className="NextPageButton__button" onClick={this.handleClick}>{this.props.buttonText}</button>
      </div>
    )
  }
}
