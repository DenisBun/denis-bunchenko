import * as React from 'react';
import { useCallback, useState } from 'react';
import { useLocation } from '@reach/router';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';

type DataProps = {
  location: Location;
};

const Layout: React.FC<DataProps> = ({ children }) => {
  // @ts-ignore-line
  const rootPath = `${__PATH_PREFIX__}/`;
  const location = useLocation();

  const isRootPath = location.pathname === rootPath;

  const [isSidebarOpened, setIsSidebarOpened] = useState<boolean>(true);

  const toggleSidebarState = useCallback(() => {
    setIsSidebarOpened((prevState) => !prevState);
  }, []);

  return (
    <div
      data-is-root-path={isRootPath}
      style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Sidebar
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      >
        <Header onToggleSidebarState={toggleSidebarState} />
        <main>{children}</main>
        <Footer />
      </Sidebar>
    </div>
  );
};

export default Layout;