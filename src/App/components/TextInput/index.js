import React, { Component } from 'react';
import './styles.scss';
import TextInputBox from './components/TextInputBox';

export default class TextInput extends Component {
  render() {
    const numBoxes = this.props.questions.length;
    if (numBoxes > 3) {
      throw new Error(`The TextInput component can only render 3 questions at most. You attempted to render ${numBoxes} questions.`)
    }
    return (
      <div className="TextInput">
        {this.props.questions.map(question => (
          <TextInputBox 
            key={question.id}
            question={question}
            numBoxes={numBoxes}
            updateQuestion={this.props.updateQuestion}
          />
        ))}
      </div>
    )
  }
}
