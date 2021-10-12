import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import twitter from '../../../images/twitter-social.png';
import linkedin from '../../../images/linkedin-social.png';
import github from '../../../images/github-social.png';
import instagram from '../../../images/instagram-social.png';
import medium from '../../../images/medium-social.png';
import reddit from '../../../images/reddit-social.png';
import upwork from '../../../images/upwork-social.png';

import * as styles from './SocialLinks.module.less';

export const SocialLinks = () => {
  const {
    site: {
      siteMetadata: { social },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitter
            linkedIn
            upWork
            gitHub
            medium
            reddit
            instagram
          }
        }
      }
    }
  `);

  return (
    <>
      <h3>Social</h3>
      <div className={styles.socialLinksWrapper}>
        <p>
          Feel free to reach me out. I am always happy to cooperate and
          communicate on any topics! 👋
        </p>
        <a
          href={`https://twitter.com/${social.twitter}`}
          className={styles.socialLink}
          target="_blank"
        >
          <img src={twitter} alt="twitter-social" />
        </a>
        <a
          href={`https://www.linkedin.com/in/${social.linkedIn}`}
          className={styles.socialLink}
          target="_blank"
        >
          <img src={linkedin} alt="linkedin-social" />
        </a>
        <a
          href={`https://www.upwork.com/freelancers/${social.upWork}`}
          className={styles.socialLink}
          target="_blank"
        >
          <img src={upwork} alt="upwork-social" />
        </a>
        <a
          href={`https://medium.com/${social.medium}`}
          className={styles.socialLink}
          target="_blank"
        >
          <img src={medium} alt="medium-social" />
        </a>
        <a
          href={`https://www.instagram.com/${social.instagram}`}
          className={styles.socialLink}
          target="_blank"
        >
          <img src={instagram} alt="instagram-social" />
        </a>
        <a
          href={`https://www.reddit.com/user/${social.reddit}`}
          className={styles.socialLink}
          target="_blank"
        >
          <img src={reddit} alt="reddit-social" />
        </a>
        <a
          href={`https://github.com/${social.gitHub}`}
          className={styles.socialLink}
          target="_blank"
        >
          <img src={github} alt="github-social" />
        </a>
      </div>
    </>
  );
};
