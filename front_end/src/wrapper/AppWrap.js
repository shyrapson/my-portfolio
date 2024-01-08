import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Components, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Components />
          <div className="copyright">
            <p className="p-text">@2022 RABIU</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
