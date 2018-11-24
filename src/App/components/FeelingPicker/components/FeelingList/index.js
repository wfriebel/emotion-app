import React, { Component } from 'react';
import './styles.scss';
import Feeling from './components/Feeling';
import { numSelected } from './helpers';

export default class FeelingList extends Component {

  render() {
    return (
      <div className="FeelingList">
        {this.props.feelings.map((feeling, index) => (
          <Feeling 
            key={feeling.id}
            feeling={feeling}
            toggleSelectedFeeling={this.props.toggleSelectedFeeling}
            numSelected={numSelected(this.props.feelings)}
            selectedMax={this.props.selectedMax}
            col={index % 3}
          />
        ))}
      </div>
    )
  }
}
