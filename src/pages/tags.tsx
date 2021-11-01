import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';

import { Seo } from '../components/Seo';
import { SocialLinks } from '../components/shared/SocialLinks/SocialLinks';
import { slugify } from '../utils/helpers';

import './tags.less';

type TagsType = {
  allMarkdownRemark: {
    group: { fieldValue: string; totalCount: number }[];
  };
};

const TagsPage: React.FC<PageProps<TagsType>> = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <>
    <Seo title="All Tags" />

    <article className="blog-page">
      <header>
        <div className="container">
          <h1 className="title">All Tags</h1>
          <p className="subTitle">
            List of all tags which are used in articles
          </p>
        </div>
      </header>

      <section className="container" style={{ paddingTop: 0 }}>
        <ul className="tagList">
          {group.map((tag, index, tagsArr) => (
            <li key={tag.fieldValue} className="tag">
              <Link to={`/tags/${slugify(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
        <SocialLinks />
      </section>
    </article>
  </>
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
