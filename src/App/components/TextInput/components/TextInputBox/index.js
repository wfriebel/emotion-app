import React, { Component } from 'react';
import './styles.scss';

const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    inDebounce = setTimeout(() => {
      clearTimeout(inDebounce);
      func.apply(this, arguments);
    }, delay);
  }
}

export default class TextInputBox extends Component {
  handleChange = e => {
    this.delayedUpdateQuestion(e.target.value);
  }

  updateQuestion = value => {
    this.props.updateQuestion(this.props.question.id, value);
  }

  delayedUpdateQuestion = debounce(this.updateQuestion, 2000);

  render() {
    return (
      <div className="TextInputBox">
        <p className="TextInputBox__prompt">
          {this.props.question.prompt}
        </p>
        <textarea 
          className={`TextInputBox__response size-${this.props.numBoxes}`}
          defaultValue={this.props.question.response}
          onChange={this.handleChange}
          placeholder={this.props.question.placeholder}
        >
        </textarea>
      </div>
    )
  }
}
