import { Link } from 'gatsby';
import React from 'react';

import './Header.less';

import myImg from '../../../images/me.png';
import sun from '../../../images/sun.png';
import moon from '../../../images/moon.png';

const sidebarButtonIcon = (
  <svg viewBox="0 0 100 80" width="30" height="20">
    <rect width="100" height="15"></rect>
    <rect y="30" width="100" height="15"></rect>
    <rect y="60" width="100" height="15"></rect>
  </svg>
);

export const Header = ({ onToggleSidebarState, onToggleTheme, theme }) => {
  return (
    <header className="headerWrapper">
      <button
        className="sidebarToggleBtn"
        onClick={onToggleSidebarState}
        aria-label="toggle"
      >
        {sidebarButtonIcon}
      </button>
      <div className="container headerContainer">
        <Link to="/" className="homeLink">
          <img className="myImg" src={myImg} alt="GitHub" />
          <span>Denis Bunchenko</span>
        </Link>
        <nav style={{ display: 'flex' }}>
          <Link to="/blog" className="headerLink">
            Blog
          </Link>
          <Link to="/me" className="headerLink">
            About Me
          </Link>
        </nav>

        <img
          className="themeIconToggle"
          src={theme === 'light' ? sun : moon}
          alt="sun"
          onClick={onToggleTheme}
        />
      </div>
    </header>
  );
};
