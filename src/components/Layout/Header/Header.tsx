import { Link } from 'gatsby';
import React, { useState } from 'react';

// @ts-ignore-line
import * as styles from './Header.module.less';
// @ts-ignore-line
import myImg from '../../../images/me.png';
// @ts-ignore-line
import sun from '../../../images/sun.png';
// @ts-ignore-line
import moon from '../../../images/moon.png';
import { useEffect } from 'react';

export const Header = () => {
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

        {theme === 'light' ? (
          <img
            className={styles.themeIconToggle}
            src={sun}
            alt="sun"
            onClick={toggleTheme}
          />
        ) : (
          <img
            className={styles.themeIconToggle}
            src={moon}
            alt="moon"
            onClick={toggleTheme}
          />
        )}
      </div>
    </header>
  );
};
