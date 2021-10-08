import { Link } from 'gatsby';
import React from 'react';

// @ts-ignore-line
import * as styles from './Header.module.less';
// @ts-ignore-line
import myImg from '../../../images/me.png';

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        <Link to="/">
          <img className={styles.myImg} src={myImg} alt="GitHub" /> Denis
          Bunchenko
        </Link>
      </div>
    </header>
  );
};
