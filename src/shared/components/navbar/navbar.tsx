import React, { useCallback, FC } from 'react';

import { INavbarItem } from './components/navbar-item/interfaces/navbar-item.interface';
import { NavbarItem } from './components/navbar-item/navbar-item';
import { NAVBAR_ITEMS } from './components/utils/navbar.constants';
import { useStyles } from './navbar.style';

export const Navbar: FC = () => {
  const { root } = useStyles();

  const renderNavbarItem = useCallback(
    (navbarItem: INavbarItem) => <NavbarItem key={navbarItem.text} {...navbarItem} />,
    [],
  );

  return <nav className={root}>{NAVBAR_ITEMS.map(renderNavbarItem)}</nav>;
};
