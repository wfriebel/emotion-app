import React, { Component } from 'react';
import './styles.scss';
import NextPageButton from '../NextPageButton';

export default class FinishedPage extends Component {
  render() {
    return (
      <div className="FinishedPage">
        <h1 className="FinishedPage__title">You're Finished!</h1>
        <NextPageButton
          navigatePage={this.props.navigatePage}
          buttonText="See summary"
          color="#ffc776"
        />
      </div>
    )
  }
}
