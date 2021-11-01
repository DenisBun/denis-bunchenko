import React, { useMemo } from 'react';
import { graphql, Link } from 'gatsby';

import { Seo } from '../components/Seo';
import { Posts } from '../components/Posts/Posts';
import { getSimplifiedPosts } from '../utils/helpers';

import './tag.less';

const TagTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const posts = data.allMarkdownRemark.edges;
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts]);
  const message = totalCount === 1 ? ' post found.' : ' posts found.';

  return (
    <>
      <Seo title={`Posts tagged: ${tag}`} />

      <article>
        <header>
          <div className="container">
            <h1 style={{ marginBottom: '.75rem', textAlign: 'center' }}>
              <span className="deemphasized">Posts tagged:</span>{' '}
              <span className="primaryUnderlined">{tag}</span>
            </h1>
            <p className="description">
              <span className="count">{totalCount}</span>
              {message}
            </p>
          </div>
        </header>

        <section className="container">
          <Posts data={simplifiedPosts} />
          <Link className="allTagsLink" to="/tags">
            View all tags
          </Link>
        </section>
      </article>
    </>
  );
};


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
