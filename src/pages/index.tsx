import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { useEffect, useState } from 'react';

import { Seo } from '../components/seo';
import { Layout } from '../components/Layout';
import { getSimplifiedPosts } from '../utils/helpers';

// @ts-ignore-line
import githubImg from '../images/nav-github.png';

// @ts-ignore-line
import * as styles from './index.module.less';

const BlogIndex: React.FC<PageProps> = ({ data, location }) => {
  // const [followers, setFollowers] = useState(0);

  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const latestFivePosts = data.latest.edges;

  const simplifiedLatestPosts = React.useMemo(
    () => getSimplifiedPosts(latestFivePosts),
    [latestFivePosts]
  );

  // useEffect(() => {
  //   async function getGithubAPI() {
  //     const response = await fetch(
  //       'https://api.github.com/users/AwesomeDevDen'
  //     );
  //     const data = await response.json();

  //     return data;
  //   }

  //   getGithubAPI().then((data) => {
  //     setFollowers(data.followers);
  //   });
  // }, []);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
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
            <p className={styles.heroButtons}>
              <a
                href="https://github.com/AwesomeDevDen"
                className={`${styles.button} ${styles.iconButton}`}
              >
                <img src={githubImg} alt="GitHub" />
                {/* {Number(followers).toLocaleString()} GitHub followers */}
                Don't hesitate to follow
              </a>
            </p>
          </div>
        </header>

        <div className={styles.container}>
          <h2 className="flex-header">
            <span>Latest Articles</span> <Link to="/blog">View All</Link>
          </h2>
          {/* <Posts data={simplifiedLatestPosts} /> */}
          <h2>Newsletter</h2>
          <p>
            Subscribe to the newsletter to get my latest content by email. Not
            on any set schedule. Unsubscribe anytime.
          </p>
          <p className={styles.heroButtons}>
            <a
              href="https://awesomeden.substack.com/subscribe"
              className={styles.button}
            >
              Get the Newsletter
            </a>
          </p>
        </div>
      </article>
    </Layout>
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
      limit: 5
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