import * as React from "react"
import { Link, graphql } from "gatsby"

import { Seo } from '../components/Seo';
import { appendComments, slugify } from '../utils/helpers';

import './blog-post.less';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark.frontmatter;
  const { slug } = data.markdownRemark.fields;
  const { html } = data.markdownRemark;

  const commentBox = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    appendComments(commentBox);
  }, [commentBox]);

  return (
    <>
      <Seo title={post.title} description={post.description || post.excerpt} />
      <article
        itemScope
        itemType="http://schema.org/Article"
        className="blogPost"
      >
        <header>
          <div className="container">
            <h1 className="postTitle">{post.title}</h1>
            <div className="post-meta">
              {post.tags && (
                <div className="tags">
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

              <div className="postDetails">
                Written by <Link to="/me">Denis Bunchenko</Link> on{' '}
                <time>{post.date}</time>
              </div>
            </div>
            {post.description && (
              <p className="postDescription">{post.description}</p>
            )}
          </div>
        </header>

        <section
          id={slug}
          className="container"
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
        />
      </article>

      <section id="comments" className="comments container">
        <h2>Comments</h2>
        <div ref={commentBox} />
      </section>
    </>
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
