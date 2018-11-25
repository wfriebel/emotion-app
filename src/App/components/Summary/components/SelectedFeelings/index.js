import React, { Component } from 'react';
import './styles.scss';

const capitalize = word => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export default class SelectedFeelings extends Component {
  render() {
    return (
      <div className="SelectedFeelings">
        {this.props.feelings.map(feeling => {
          return (
            <p 
              key={feeling.id}
              className="SelectedFeelings__feeling"
            >
              {capitalize(feeling.feeling)}
            </p>
          )
        })}
      </div>
    )
  }
}
