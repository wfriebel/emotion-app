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
        <NavButton
          scene={scene}
          direction="forwards"
          navigatePage={navigatePage}
        />
      </div>
    )
  }
}