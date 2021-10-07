import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Made by Denis Bunchenko with{' '}
      <img src="https://img.icons8.com/fluency/20/000000/pixel-heart.png" />
      <a href="https://ko-fi.com/awsmdenisbunchenko" target="_blank">
        <StaticImage
          layout="fixed"
          src="../images/kofi-logo.png"
          alt="Profile picture"
          width={35}
          height={20}
        />
      </a>
    </footer>
  );
};
