import React, { Component } from 'react';
import './styles.scss';

export default class Button extends Component {
  handleClick = e => {
    this.props.navigatePage(this.props.direction)
  }

  handleTouch = e => {
    if (e.touches.length > 1) {
      return;
    }
    this.props.navigatePage(this.props.direction)
  }

  render() {
  const direction = this.props.direction;
    return (
      <div className="NavButton">
        <button
          className="NavButton__button"
          onClick={this.handleClick}
        >
          <i className="material-icons NavButton__arrow-image">{direction === 'forwards' ? 'chevron_right' : 'chevron_left'}</i>
        </button>
      </div>
    )
  }
}