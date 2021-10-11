import * as React from 'react';
import { Link, PageProps } from 'gatsby';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

type DataProps = {
  location: Location;
};

export const Layout: React.FC<DataProps> = ({ location, children }) => {
  // @ts-ignore-line
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div
      data-is-root-path={isRootPath}
      style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
