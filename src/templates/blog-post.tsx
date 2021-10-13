import * as React from "react"
import { Link, graphql } from "gatsby"

import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { slugify } from '../utils/helpers';

import * as styles from './blog-post.module.less';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark.frontmatter;
  const { slug } = data.markdownRemark.fields;
  const { html } = data.markdownRemark;

  return (
    <Layout location={location}>
      <Seo title={post.title} description={post.description || post.excerpt} />
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <div className={styles.container}>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <div className="post-meta">
              {post.tags && (
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/tags/${slugify(tag)}`}
                      className={`tag-${tag}`}
                    >
                      {tag}
                    </Link>
                  ))}
                  <Link
                    to="/tags"
                    style={{ display: 'inline-block', textAlign: 'center' }}
                  >
                    View all tags
                  </Link>
                </div>
              )}

              <div className={styles.postDetails}>
                Written by <Link to="/me">Denis Bunchenko</Link> on{' '}
                <time>{post.date}</time>
              </div>
            </div>
            {post.description && (
              <p className={styles.postDescription}>{post.description}</p>
            )}
          </div>
        </header>

        <section
          id={slug}
          className={styles.container}
          dangerouslySetInnerHTML={{ __html: html }}
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
