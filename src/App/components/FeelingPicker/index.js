import React, { Component } from 'react';
import './styles.scss';
import FeelingList from './components/FeelingList';

const MAX_FEELINGS_SELECTED = 3;

export default class FeelingPicker extends Component {
  render() {
    return (
      <div className="FeelingPicker">
        <div className="FeelingPicker__title-container">
          <h1 className="FeelingPicker__title">{this.props.title}</h1>
        </div>
        <FeelingList
          feelings={this.props.feelings}
          toggleSelectedFeeling={this.props.toggleSelectedFeeling}
          selectedMax={MAX_FEELINGS_SELECTED}
        />
      </div>
    )
  }
}
