import React, { useMemo } from 'react';
import { graphql, PageProps } from 'gatsby';

import { Layout } from '../components/Layout';
import { Search } from '../components/Search';
import { Seo } from '../components/Seo';
import { getSimplifiedPosts } from '../utils/helpers';

const BlogIndex: React.FC<PageProps> = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts]);

  return (
    <Layout location={location}>
      <Seo title="Blog" />

      <article className="blog-page">
        <header>
          <div className="container">
            <h1>Blog</h1>
            <p className="description">
              Articles, tutorials, snippets, notes, and much more else. The
              archive of everything I've written.
            </p>
          </div>
        </header>

        <section>
          <div className="container">
            <Search data={simplifiedPosts} showYears />
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogIndex;
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
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