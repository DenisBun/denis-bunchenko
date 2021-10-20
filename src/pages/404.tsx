import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import { Seo } from '../components/Seo';

const NotFoundPage: React.FC<PageProps> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
