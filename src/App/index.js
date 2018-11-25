import React, { Component } from 'react';
import './styles.scss';
import { QUESTIONS } from './resources/questions';
import { FEELINGS } from './resources/feelings';
import { selectQuestions } from './selectors';
import FeelingPicker from './components/FeelingPicker';
import Welcome from './components/Welcome';
import SceneNav from './components/SceneNav';
import TextInput from './components/TextInput';
import PhaseTitlePage from './components/PhaseTitlePage';
import Summary from './components/Summary';
import FinishedPage from './components/FinishedPage';

const SCENES_COUNT = 14;
const feelingPickerTitle = 'Here are some emotions. Select up to 3 that describe what you are feeling.';

const INITIAL_STATE = {
  scene: 14,
  phase: 1,
  feelings: FEELINGS,
  questions: QUESTIONS
}

class App extends Component {
 
  state = INITIAL_STATE;

  toggleSelectedFeeling = (feelingId) => {
    this.setState(prevState => ({
      feelings: prevState.feelings.map(feeling => {
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

  setPhase = phase => {
    this.setState(() => ({ phase }));
  }

  updateBackgroundColor = () => {
    if (this.state.scene === 7 && this.state.phase !== 1) {
      this.setPhase(1);
    } else if (this.state.scene === 8 && this.state.phase !== 2) {
      this.setPhase(2);
    } else if (this.state.scene === 10 && this.state.phase !== 2) {
      this.setPhase(2);
    }
    else if (this.state.scene === 11 && this.state.phase !== 3) {
      this.setPhase(3);
    }
  }

  componentDidUpdate() {
    this.updateBackgroundColor();
  }

  renderContent = (scene) => {
    if (scene === 1) {
      return (
        <Welcome 
          navigatePage={this.navigatePage}
        />
      )
    }

    if (scene === 2) {
      return (
        <PhaseTitlePage
          phase={1}
          subtitle="Identify"
        />
      )
    }

    if (scene === 3) {
      return (
        <FeelingPicker 
          title={feelingPickerTitle}
          feelings={this.state.feelings}
          toggleSelectedFeeling={this.toggleSelectedFeeling}
        />
      )
    }
    if (scene === 4) {
      return (
        <TextInput 
          questions={selectQuestions(this.state.questions, 1)}
          updateQuestion={this.updateQuestion}
        />
      )
    }

    if (scene === 5) {
      return (
        <TextInput 
          questions={selectQuestions(this.state.questions, 2)}
          updateQuestion={this.updateQuestion}
        />
      )
    }

    if (scene === 6) {
      return (
        <TextInput 
          questions={selectQuestions(this.state.questions, 3)}
          updateQuestion={this.updateQuestion}
        />
      )
    }

    if (scene === 7) {
      return (
        <TextInput 
          questions={selectQuestions(this.state.questions, 4)}
          updateQuestion={this.updateQuestion}
        />
      )
    }

    if (scene === 8) {
      return (
        <PhaseTitlePage
          phase={2}
          subtitle="Re-frame"
        />
      )
    }

    if (scene === 9) {
      return (
        <TextInput 
          questions={selectQuestions(this.state.questions, 5)}
          updateQuestion={this.updateQuestion}
        />
      )
    }

    if (scene === 10) {
      return (
        <TextInput 
          questions={selectQuestions(this.state.questions, 6)}
          updateQuestion={this.updateQuestion}
        />
      )
    }

    if (scene === 11) {
      return (
        <PhaseTitlePage
          phase={3}
          subtitle="Resolve"
        />
      )
    }

    if (scene === 12) {
      return (
        <TextInput 
          questions={selectQuestions(this.state.questions, 7)}
          updateQuestion={this.updateQuestion}
        />
      )
    }

    if (scene === 13) {
      return (
        <FinishedPage
          navigatePage={this.navigatePage}
        />
      )
    }

    if (scene === 14) {
      const { feelings, questions } = this.state;
      return (
        <Summary 
          feelings={feelings.filter(feeling => feeling.selected)}
          questions={questions}
        />
      )
    }
  }

  initialScreenSize = window.innerHeight;
  
  render() {
    const scene = this.state.scene;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;
    const isKeyboard = windowHeight < this.initialScreenSize;
    return (
      <div className={`App phase-${this.state.phase} ${bodyHeight > windowHeight && !isKeyboard ? 'safari' : ''}`}>
        {this.renderContent(scene)}
        {
          scene !== 1 && (
            <SceneNav
              scene={scene}
              navigatePage={this.navigatePage}
              onlyBack={scene === SCENES_COUNT || scene === SCENES_COUNT - 1}
              lastScene={scene === SCENES_COUNT}
            />
          )
        }
      </div>
    );
  }
}

export default App;