import { useStaticQuery, graphql } from 'gatsby';
import React, { useMemo } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import {
  getCategoriesFromPosts,
  getSimplifiedPosts,
} from '../../../utils/helpers';

import * as styles from './SidebarContent.module.less';

export const SidebarContent: React.FC = (props) => {
  const data = useStaticQuery(graphql`
    query StaticQuery {
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
              categories
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts]);
  const categories = useMemo(
    () => getCategoriesFromPosts(simplifiedPosts),
    [simplifiedPosts]
  );

  // const postsGroupedByCategories = simplifiedPosts.reduce((acc, post) => ({
  //   ...acc,

  // }), {})

  return (
    <>
      <div className={styles.sidebarContent}>
        <h3 className={styles.sidebarTitle}>Categories</h3>
        <Accordion allowZeroExpanded allowMultipleExpanded>
          {categories.map((category) => (
            <AccordionItem key={category}>
              <AccordionItemHeading>
                <AccordionItemButton>{category}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>posts by {category}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};
