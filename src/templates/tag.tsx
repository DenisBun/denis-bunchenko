import React, { useMemo } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { Posts } from '../components/Posts/Posts';
import { getSimplifiedPosts } from '../utils/helpers';

const TagTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const posts = data.allMarkdownRemark.edges;
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts]);
  const message = totalCount === 1 ? ' post found.' : ' posts found.';

  return (
    <Layout location={location}>
      <Seo title={`Posts tagged: ${tag}`} />

      <article>
        <header>
          <div className="container">
            <h1>
              <span className="deemphasized">Posts tagged:</span>{' '}
              <span className="primary-underline">{tag}</span>
            </h1>
            <p className="description">
              <span className="count">{totalCount}</span>
              {message}
            </p>
          </div>
        </header>

        <section className="container">
          <Posts data={simplifiedPosts} />
        </section>
      </article>
    </Layout>
  );
};

TagTemplate.Layout = Layout;

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
