import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ReactSidebar from 'react-sidebar';

import { SidebarContent } from './SidebarContent';
import './Sidebar.less';
import { hasWindow } from '../../../utils/helpers';

const mql = hasWindow && window.matchMedia(`(min-width: 1200px)`);

type SidebarProps = {
  isSidebarOpened: boolean;
  setIsSidebarOpened: Dispatch<SetStateAction<boolean>>;
  children?: any;
};

export const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpened,
  setIsSidebarOpened,
  children,
}) => {
  const [isDocked, setIsDocked] = useState<boolean>(mql.matches);

  useEffect(() => {
    mql.addEventListener('change', mediaQueryChanged);
    return () => {
      mql.removeEventListener('change', mediaQueryChanged);
    };
  }, []);

  useEffect(() => {
    isSidebarOpened ? setIsDocked(mql.matches) : setIsDocked(false);
  }, [isSidebarOpened]);

  const mediaQueryChanged = () => {
    if (!mql.matches) {
      setIsDocked(false);
      setIsSidebarOpened(false);
    } else {
      setIsDocked(true);
      setIsSidebarOpened(true);
    }
  };

  if (!isDocked && isSidebarOpened) {
    return children;
  }

  return (
    <aside>
      <ReactSidebar
        sidebarClassName={'sidebarCustom'}
        sidebar={<SidebarContent />}
        docked={isDocked}
        open={isSidebarOpened}
      >
        {children}
      </ReactSidebar>
    </aside>
  );
};
