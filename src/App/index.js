import React, { Component } from 'react';
import './styles.scss';
import { QUESTIONS } from './resources/questions';
import { GENERAL_FEELINGS } from './resources/feelings';
import { SITUATION } from './resources/situation';
import { selectQuestions } from './selectors';
import FeelingPicker from './components/FeelingPicker';
import Welcome from './components/Welcome';
import SceneNav from './components/SceneNav';
import TextInput from './components/TextInput';
import GetStartedButton from './components/GetStartedButton';

const SCENES_COUNT = 6;
const feelingPickerTitle = 'Here are some emotions. Select up to 3 that describe what you are feeling.';

const INITIAL_STATE = {
  scene: 1,
  generalFeelings: GENERAL_FEELINGS,
  specificFeelings: [],
  situation: SITUATION,
  rootCauses: [],
  questions: QUESTIONS
}

class App extends Component {
 
  state = INITIAL_STATE;

  toggleSelectedFeeling = (feelingId) => {
    this.setState(prevState => ({
      generalFeelings: prevState.generalFeelings.map(feeling => {
        if (feeling.id === feelingId) {
          return {
            ...feeling,
            selected: !feeling.selected
          }
        } else {
          return feeling;
        }
      })
    }))
  }
  
  setStateProperty = (propertyName, value) => {
    if (this.state.hasOwnProperty(propertyName)) {
      this.setState(() => ({
        [propertyName]: value
      }))
    } else {
      throw new Error(`${propertyName} is not a property of this.state`);
    }
  }
  
  updateQuestionSet = (setName, questionId, value) => {
    if (this.state.hasOwnProperty(setName)) {
      this.setState(prevState => ({
        [setName]: prevState[setName].map(question => {
          if (question.id === questionId) {
            return {
              ...question,
              response: value
            }
          } else {
            return question
          }
        })
      }))
    } else {
      throw new Error(`${setName} is not a property of this.state`);
    }
  }
  
  navigatePage = (direction) => {
    if (direction === 'forwards' && this.state.scene < SCENES_COUNT) {
      this.setState(prevState => ({
        scene: prevState.scene + 1
      }))
    } else if (direction === 'backwards' && this.state.scene > 1) {
      this.setState(prevState => ({
        scene: prevState.scene - 1
      }))
    }
  }

  updateQuestion = (questionId, response) => {
    this.setState(prevState => ({
      questions: prevState.questions.map(question => {
        if (question.id === questionId) {
          return {
            ...question,
            response
          }
        } else {
          return question;
        }
      })
    }))
  }

  renderContent = (scene) => {
    if (scene === 1) {
      return (
        <Welcome />
      )
    }
    if (scene === 2) {
      return (
        <FeelingPicker 
          title={feelingPickerTitle}
          feelings={this.state.generalFeelings}
          toggleSelectedFeeling={this.toggleSelectedFeeling}
        />
      )
    }
    if (scene === 3) {
      return (
        <TextInput 
          questions={selectQuestions(this.state.questions, 1)}
          updateQuestion={this.updateQuestion}
        />
      )
    }

    if (scene === 4) {
      return (
        <TextInput 
          questions={selectQuestions(this.state.questions, 2)}
          updateQuestion={this.updateQuestion}
        />
      )
    }

    if (scene === 5) {
      return (
        <TextInput 
          questions={selectQuestions(this.state.questions, 3)}
          updateQuestion={this.updateQuestion}
        />
      )
    }

    if (scene === 6) {
      return (
        <TextInput 
          questions={selectQuestions(this.state.questions, 4)}
          updateQuestion={this.updateQuestion}
        />
      )
    }
  }

  render() {
    const scene = this.state.scene;
    return (
      <div className="App">
        {this.renderContent(scene)}
        {
          this.state.scene === 1
            ? (
              <GetStartedButton 
                navigatePage={this.navigatePage}
              />
            ) : (
              <SceneNav
                scene={scene}
                navigatePage={this.navigatePage}
              />
            )
        }
      </div>
    );
  }
}

export default App;