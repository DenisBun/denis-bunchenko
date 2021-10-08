import * as React from 'react';
import { Link, PageProps } from 'gatsby';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

type DataProps = {
  location: Location;
  title: string;
};

export const Layout: React.FC<DataProps> = ({ location, title, children }) => {
  // @ts-ignore-line
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div data-is-root-path={isRootPath}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
