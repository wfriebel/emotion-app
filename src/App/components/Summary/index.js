import React, { Component } from 'react';
import './styles.scss';
import SelectedFeelings from "./components/SelectedFeelings";

export default class Summary extends Component {
  render() {
    return (
      <div className="Summary">
        <h2 className="Summary__subtitle">What happened:</h2>
        <p className="Summary_paragraph">{this.props.questions[3].response}</p>
        <p className="Summary_paragraph">{this.props.questions[5].response}</p>
        <h2 className="Summary__subtitle">Your reaction:</h2>
        <p className="Summary_paragraph">{this.props.questions[1].response}</p>
        <p className="Summary_paragraph">{this.props.questions[4].response}</p>
        <h2 className="Summary__subtitle">The reaction of others:</h2>
        <p className="Summary_paragraph">{this.props.questions[10].response}</p>
        <h2 className="Summary__subtitle">Your assumptions:</h2>
        <p className="Summary_paragraph">{this.props.questions[11].response}</p>
        <h2 className="Summary__subtitle">How you feel:</h2>
        <SelectedFeelings
          feelings={this.props.feelings}
        />
        <p className="Summary_paragraph">{this.props.questions[0].response}</p>
        <p className="Summary_paragraph">{this.props.questions[7].response}</p>
        <h2 className="Summary__subtitle">Why you feel this way:</h2>
        <p className="Summary_paragraph">{this.props.questions[2].response}</p>
        <p className="Summary_paragraph">{this.props.questions[6].response}</p>
        <h2 className="Summary__subtitle">Your advice to yourself:</h2>
        <p className="Summary_paragraph">{this.props.questions[8].response}</p>
        <p className="Summary_paragraph">{this.props.questions[9].response}</p>
        <h2 className="Summary__subtitle">What you will do now:</h2>
        <p className="Summary_paragraph">{this.props.questions[13].response}</p>
        <p className="Summary_paragraph">{this.props.questions[12].response}</p>
      </div>
    )
  }
}
