import React, { Component } from 'react';
import './styles.scss';

export default class TextInputBox extends Component {
  handleChange = e => {
    this.props.updateQuestion(this.props.question.id, e.target.value);
  }

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
