import * as React from "react"
import { Link, graphql } from "gatsby"

import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { slugify } from '../utils/helpers';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;

  return (
    <Layout location={location}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          {/* <p>{post.frontmatter.date}</p> */}
        </header>
        {post.frontmatter.tags && (
          <div className="tags">
            {post.frontmatter.tags.map((tag) => (
              <Link
                key={tag}
                to={`/tags/${slugify(tag)}`}
                className={`tag-${tag}`}
              >
                {tag}
              </Link>
            ))}
            <Link to="/tags">View all tags</Link>
          </div>
        )}
        <div className="post-details">
          Written by <Link to="/me">Denis Bunchenko</Link> on{' '}
          <time>{post.frontmatter.date}</time>
        </div>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
