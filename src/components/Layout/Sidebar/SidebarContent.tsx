import { useStaticQuery, graphql, Link } from 'gatsby';
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
  getPostsByCategories,
  getSimplifiedPosts,
} from '../../../utils/helpers';

import './SidebarContent.less';

export const SidebarContent: React.FC = () => {
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

  const postsByCategories = useMemo(
    () => getPostsByCategories(simplifiedPosts, categories),
    [simplifiedPosts, categories]
  );

  return (
    <>
      <div className="sidebarContent">
        <h2 className="sidebarTitle">Categories 📔</h2>
        <Accordion allowZeroExpanded allowMultipleExpanded>
          {categories.map((category) => (
            <AccordionItem key={category}>
              <AccordionItemHeading>
                <AccordionItemButton>{category}</AccordionItemButton>
              </AccordionItemHeading>
              <nav>
                {postsByCategories[category].map((post) => (
                  <AccordionItemPanel key={post.slug}>
                    <Link to={post.slug} className="sidebarLink">
                      <span>📜</span> <span>{post.title}</span>
                    </Link>
                  </AccordionItemPanel>
                ))}
              </nav>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};
