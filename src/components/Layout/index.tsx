import * as React from 'react';
import { useCallback, useState, useEffect, useRef } from 'react';
import { useLocation } from '@reach/router';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import {
  getMainClass,
  themeSubject,
  toggleBackgroundColor,
} from '../../utils/helpers';

type DataProps = {
  location: Location;
};

const Layout: React.FC<DataProps> = ({ children }) => {
  // @ts-ignore-line
  const rootPath = `${__PATH_PREFIX__}/`;
  const location = useLocation();

  const themeSubjectRef = useRef(themeSubject);

  const isRootPath = location.pathname === rootPath;

  const [isSidebarOpened, setIsSidebarOpened] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleSidebarState = useCallback(() => {
    setIsSidebarOpened((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
    }
  }, []);

  useEffect(() => {
    toggleBackgroundColor(theme);
    localStorage.setItem('theme', theme);
    themeSubjectRef.current.next(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <div
      data-is-root-path={isRootPath}
      style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
      id="layout"
      className={getMainClass(theme)}
    >
      <Sidebar
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      >
        <Header
          onToggleSidebarState={toggleSidebarState}
          onToggleTheme={toggleTheme}
          theme={theme}
        />
        <main>{children}</main>
        <Footer />
      </Sidebar>
    </div>
  );
};

export default Layout;