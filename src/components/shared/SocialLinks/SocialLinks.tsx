import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import twitter from '../../../images/twitter-social.png';
import linkedin from '../../../images/linkedin-social.png';
import github from '../../../images/github-social.png';
import instagram from '../../../images/instagram-social.png';
import medium from '../../../images/medium-social.png';
import reddit from '../../../images/reddit-social.png';
import upwork from '../../../images/upwork-social.png';

import './SocialLinks.less';

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
      <h3 style={{ fontSize: '2rem' }}>Social</h3>
      <div className="socialLinksWrapper">
        <p>
          Feel free to reach me out. I am always happy to cooperate and
          communicate on any topics! 👋
        </p>
        <div>
          <a
            href={`https://twitter.com/${social.twitter}`}
            className="socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter-social" />
          </a>
          <a
            href={`https://www.linkedin.com/in/${social.linkedIn}`}
            className="socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin-social" />
          </a>
          <a
            href={`https://www.upwork.com/freelancers/${social.upWork}`}
            className="socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={upwork} alt="upwork-social" />
          </a>
          <a
            href={`https://medium.com/${social.medium}`}
            className="socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={medium} alt="medium-social" />
          </a>
          <a
            href={`https://www.instagram.com/${social.instagram}`}
            className="socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram-social" />
          </a>
          <a
            href={`https://www.reddit.com/user/${social.reddit}`}
            className="socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={reddit} alt="reddit-social" />
          </a>
          <a
            href={`https://github.com/${social.gitHub}`}
            className="socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github-social" />
          </a>
        </div>
      </div>
    </>
  );
};
