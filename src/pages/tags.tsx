import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';

import { Seo } from '../components/Seo';
import { slugify } from '../utils/helpers';

type TagsType = {
  allMarkdownRemark: {
    group: { fieldValue: string; totalCount: number }[];
  };
};

const TagsPage: React.FC<PageProps<TagsType>> = ({
  data: {
    allMarkdownRemark: { group },
  },
  location,
}) => (
  <Layout location={location}>
    <Seo title="All Tags" />

    <article className="blog-page">
      <header>
        <div className="container">
          <h1>All Tags</h1>
          <p className="description">
            List of all tags which are used in articles
          </p>
        </div>
      </header>

      <section className="container">
        <ul>
          {group.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${slugify(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  </Layout>
);

export default TagsPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
