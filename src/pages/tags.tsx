import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';

import { Seo } from '../components/Seo';
import { SocialLinks } from '../components/shared/SocialLinks/SocialLinks';
import { slugify } from '../utils/helpers';

import * as styles from './tags.module.less';

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
        <div className={styles.container}>
          <h1 className={styles.title}>All Tags</h1>
          <p className={styles.subTitle}>
            List of all tags which are used in articles
          </p>
        </div>
      </header>

      <section className={styles.container} style={{ paddingTop: 0 }}>
        <ul style={{ marginBottom: '3rem' }}>
          {group.map((tag, index, tagsArr) => (
            <li key={tag.fieldValue} className={styles.tag}>
              <Link to={`/tags/${slugify(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
        <SocialLinks />
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
