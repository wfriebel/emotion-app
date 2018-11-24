import React, { Component } from 'react';
import './styles.scss';
import { capitalize } from './helpers';

export default class Feeling extends Component {
  handleClick = (e) => {
    const { numSelected, selectedMax, feeling, toggleSelectedFeeling } = this.props;
    if (
        (numSelected < selectedMax && !feeling.selected) ||
        (feeling.selected)
      ) {
      toggleSelectedFeeling(feeling.id);
    }
  }

  render() {
    const { feeling, selected } = this.props.feeling;
    const { col } = this.props;
    return (
      <div className={`Feeling col-${col} ${selected ? 'Feeling--selected' : ''}`}>
        <button 
          className={`Feeling__button ${selected ? 'Feeling__button--selected' : ''}`}
          onClick={this.handleClick}
        >
          {capitalize(feeling)}
        </button>
      </div>
    )
  }
}
