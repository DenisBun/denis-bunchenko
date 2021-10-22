import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';

import * as styles from './Header.module.less';

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

export const Header = ({ onToggleSidebarState }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className={styles.headerWrapper}>
      <button
        className={styles.sidebarToggleBtn}
        onClick={onToggleSidebarState}
      >
        {sidebarButtonIcon}
      </button>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <Link to="/" className={styles.homeLink}>
          <img className={styles.myImg} src={myImg} alt="GitHub" />
          <span>Denis Bunchenko</span>
        </Link>
        {/* <input type="checkbox" className={styles.checkbox} id="chk" />
        <label className={styles.label} htmlFor="chk">
          <img  style={{height: '18px', width: '18px'}} src={sun} alt="sun" />
          <img style={{height: '18px', width: '18px'}}  src={moon} alt="moon" />
          <div className={styles.ball}></div>
        </label> */}
        <nav style={{ display: 'flex' }}>
          <Link to="/blog" className={styles.headerLink}>
            Blog
          </Link>
          <Link to="/me" className={styles.headerLink}>
            About Me
          </Link>
        </nav>

        <img
          className={styles.themeIconToggle}
          src={theme === 'light' ? sun : moon}
          alt="sun"
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
};
