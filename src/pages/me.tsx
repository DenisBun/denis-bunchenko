import { graphql, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { SocialLinks } from '../components/shared/SocialLinks/SocialLinks';

import * as styles from './me.module.less';

const Me: React.FC<PageProps> = ({ data, location }) => {
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;
  return (
    <Layout location={location}>
      <Seo title="About Me" />

      <article className="blog-page">
        <header>
          <div className={styles.container}>
            <h1 className={styles.title}>About me</h1>
            <p className={styles.subTitle}>Software Engineer</p>
            <p className={styles.description}>
              A software engineer from Belarus. I have been working on a
              large-scale software products over 5 years.
            </p>
            <StaticImage
              className="bio-avatar"
              formats={['auto', 'webp', 'avif']}
              src="../images/me.jpeg"
              // layout="fixed"
              // width={280}
              // height={280}
              alt="Profile picture"
            />
            <p className={styles.description}>
              I have worked in cross-functional and multi-cultural teams, which
              members are from England, Finland, Germany and Pakistan. Have a
              huge amount of experience teaching the newcomers and junior
              programmers. I enjoy learning something new, overcoming hardships,
              co-operating with team members.
            </p>
            <p className={styles.description}>
              As of my non-programming life, I enjoy sports,{' '}
              <a
                href="https://www.pinterest.ca/awesomedevdev/potential-tattoos/"
                target="_blank"
              >
                tattoos
              </a>
              , cars,{' '}
              <a
                href="https://open.spotify.com/playlist/2ijZQmb57z57bL6YAcNvXq?si=3094a54885e44f8e"
                target="_blank"
              >
                music
              </a>{' '}
              and art.
            </p>
            <p className={styles.description}>Ford Mustang owner 😎</p>
            <StaticImage
              className="bio-avatar"
              formats={['auto', 'webp', 'avif']}
              src="../images/my-mustang.jpeg"
              alt="Ford Mustang"
            />
            {/* Primary skill - UI/UX. English level: C1. Hard Skills: JavaScript,
              TypeScript, GraphQL Frameworks: React, VueJS, Angular 8+, Redux,
              Redux-Observables, Apollo. Other: CSS3, HTML5, RxJS, NodeJS,
              Material-UI, Flexbox, CSS Grid, Webpack, Gulp, React-Router,
              Redux-persist, NgRx Adaptive layout, Photoshop, design patterns,
              code quality, CI/CD */}
          </div>
        </header>

        <section className={styles.container}>
          <SocialLinks />
        </section>
      </article>
    </Layout>
  );
};

export default Me;
export const pageQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author {
          name
          summary
        }
      }
    }
  }
`;
