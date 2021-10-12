import { graphql, PageProps } from 'gatsby';
import React from 'react';

import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';

import * as styles from './me.module.less';

const Me: React.FC<PageProps> = ({ data, location }) => {
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;
  return (
    <Layout location={location}>
      <Seo title="About Me" />

      {/* <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={['auto', 'webp', 'avif']}
        src="../images/profile-pic.jpeg"
        width={80}
        height={80}
        quality={95}
        alt="Profile picture"
      /> */}
      {/* {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a>
        </p>
      )} */}
      <article className="blog-page">
        <header>
          <div className={styles.container}>
            <h1>About me</h1>
            <p className="description">
              Software engineer, some other stuff etc blah-blah
            </p>
          </div>
        </header>

        <section className={styles.container}>
          <h3>Social</h3>
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
        social {
          twitter
          instagram
          linkedIn
          upWork
          gitHub
          medium
          reddit
        }
      }
    }
  }
`;
