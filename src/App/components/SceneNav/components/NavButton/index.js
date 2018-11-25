import React, { Component } from 'react';
import './styles.scss';
import tapOrClick from 'react-tap-or-click';

export default class Button extends Component {
  handleClick = e => {
    this.props.navigatePage(this.props.direction)
  }

  handleTouch = e => {
    if (e.touches && e.touches.length > 1) {
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
          {...tapOrClick(this.handleTouch)}
        >
          <i className="material-icons NavButton__arrow-image">{direction === 'forwards' ? 'chevron_right' : 'chevron_left'}</i>
        </button>
      </div>
    )
  }
}