import React, { Component } from 'react';
import './styles.scss';
import NavButton from './components/NavButton';

export default class SceneNav extends Component {
  render() {
    const { scene, navigatePage } = this.props;
    return (
      <div className={`
          SceneNav 
          ${scene === 1 ? 'SceneNav--right-only' : ''}
        `}
      >
        <NavButton 
          scene={scene}
          direction="backwards"
          navigatePage={navigatePage}
        />
        {
          !this.props.onlyBack && (
            <NavButton
              scene={scene}
              direction="forwards"
              navigatePage={navigatePage}
            />
          )
        }
        {
          this.props.lastScene && (
            <div className="SceneNav__contact">
              Thanks for trying out our reflection exercise! If you have any thoughts or suggestions please send us an email at keepinitfeel@gmail.com.
            </div>
          )
        }
      </div>
    )
  }
}