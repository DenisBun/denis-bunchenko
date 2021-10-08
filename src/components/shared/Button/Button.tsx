import React from 'react';

import * as styles from './Button.module.less';

type ButtonProps = {
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className={`${styles.button} ${styles.iconButton}`}>
      {children}
    </button>
  );
};
