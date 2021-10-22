import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';

import { Seo } from '../components/Seo';
import { Posts } from '../components/Posts/Posts';
import { getSimplifiedPosts } from '../utils/helpers';

import githubImg from '../images/nav-github.png';
import kofiCup from '../images/kofi-cup.png';

import * as styles from './index.module.less';

const BlogIndex: React.FC<PageProps> = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const latestFivePosts = data.latest.edges;

  const simplifiedLatestPosts = React.useMemo(
    () => getSimplifiedPosts(latestFivePosts),
    [latestFivePosts]
  );

  return (
    <>
      <Seo title="Denis Bunchenko" showDefaultTitle={false} />
      <article className={styles.hero}>
        <header>
          <div className={styles.container}>
            <h1>Hey there! I'm Denis.</h1>
            <p className={`${styles.subtitle} ${styles.small}`}>
              I'm a <strong>software engineer</strong> from{' '}
              <strong>Belarus</strong>. I love coding, writing and{' '}
              <del>sometimes</del> sharing <Link to="/blog">my knowledge</Link>.
              This website is a sort of a visual guide for me and my audience
              showing what I've learned and created.
            </p>
            <p className={styles.heroButtons} style={{marginBottom: 0}}>
              <a
                href="https://github.com/AwesomeDevDen"
                target="_blank"
                className={`${styles.button} ${styles.iconButton}`}
              >
                <img src={githubImg} alt="GitHub" />
                <span>Don't Hesitate to Follow</span>
              </a>
              
            </p>
          </div>
        </header>

        <div className={styles.container}>
          <h2 className={styles.articlesHeader}>
            <span>Latest Articles</span> <Link to="/blog">View All</Link>
          </h2>
          <Posts data={simplifiedLatestPosts} />
          <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>Newsletter</h2>
          <p>
            Subscribe to the newsletter to get my latest content by email. Not
            on any set schedule. Unsubscribe anytime.
          </p>
          <p className={styles.heroButtons}>
            <a
              href="https://awesomeden.substack.com/subscribe"
              className={styles.button}
              target="_blank"
            >
              Get the Newsletter
            </a>
          </p>
          <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>
            Want to Support My Blog?
          </h2>
          <p>
            I am doing my best sharing knowledge with you. This blog is absolutely ads-free, with no sponsors at all. If you enjoy my content, please consider supporting what I do.
          </p>
          <p className={styles.heroButtons}>
          <a
                href="https://ko-fi.com/awsmdenisbunchenko"
                target="_blank"
                className={`${styles.button} ${styles.iconButton}`}
                style={{ backgroundColor: '#ff5f5f' }}
              >
                <img src={kofiCup} alt="ko-fi" className={styles.vibrateImg}/>
                <span>Buy Me a Coffee</span>
              </a>
          </p>          
        </div>
      </article>
    </>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    latest: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;
