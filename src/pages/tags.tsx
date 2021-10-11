import { graphql, Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';

import { Seo } from '../components/Seo';
import { slugify } from '../utils/helpers';

type TagsType = {
  data: {
    allMarkdownRemark: {
      group: { fieldValue: string; totalCount: number }[];
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
};

const TagsPage: React.FC<TagsType> = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout location={location}>
    <Seo title={title} />
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${slugify(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default TagsPage;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
