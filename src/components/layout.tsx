import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import { Footer } from './footer';

type DataProps = {
  location: Location;
  title: string;
};

export const Layout: React.FC<DataProps> = ({ location, title, children }) => {
  // @ts-ignore-line
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
