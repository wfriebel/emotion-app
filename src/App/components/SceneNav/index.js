import React, { Component } from 'react';
import './styles.scss';
import NavButton from './components/NavButton';
import StartOverButton from './components/StartOverButton';

export default class SceneNav extends Component {

  forwardsButton = () => {
    return (
      <NavButton
        scene={this.props.scene}
        direction="forwards"
        navigatePage={this.props.navigatePage}
      />
    )
  }

  backwardsButton = () => {
    return (
      <NavButton
        scene={this.props.scene}
        direction="backwards"
        navigatePage={this.props.navigatePage}
      />
    )
  }

  contactInfo = () => {
    return (
      <div className="SceneNav__contact">
        Thanks for trying out our reflection exercise! If you have any thoughts or suggestions please send us an email at keepinitfeel@gmail.com.
      </div>
    )
  }

  renderContent = () => {
    if (this.props.lastScene) {
      return (
        <div className="SceneNav">
          <StartOverButton
            startOver={this.props.startOver}
          />
          {this.contactInfo()}
        </div>
      )
    } else if (this.props.onlyBack) {
      return (
        <div className="SceneNav">
          {this.backwardsButton()}
        </div>
      )
    } else {
      return (
        <div className="SceneNav">
          {this.backwardsButton()}
          {this.forwardsButton()}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="SceneNav-container">
        {this.renderContent()}
      </div>
    )
  }
}

// <div className="SceneNav">
//         <NavButton 
//           scene={scene}
//           direction="backwards"
//           navigatePage={navigatePage}
//         />
//         {
//           !this.props.onlyBack && (
//             <NavButton
//               scene={scene}
//               direction="forwards"
//               navigatePage={navigatePage}
//             />
//           )
//         }
//         {
//           this.props.lastScene && (
//             <div className="SceneNav__contact">
//               Thanks for trying out our reflection exercise! If you have any thoughts or suggestions please send us an email at keepinitfeel@gmail.com.
//             </div>
//           )
//         }
//       </div>