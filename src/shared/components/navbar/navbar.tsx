import React, { useCallback, FC } from 'react';

import { INavbarItem } from './components/navbar-item/interfaces/navbar-item.interface';
import { NavbarItem } from './components/navbar-item/navbar-item';
import { useNavbarItems } from './hooks/use-navbar-items';
import { useStyles } from './navbar.style';

export const Navbar: FC = () => {
  const { root } = useStyles();
  const { navbarItems } = useNavbarItems();

  const renderNavbarItem = useCallback(
    (navbarItem: INavbarItem) => <NavbarItem key={navbarItem.text} {...navbarItem} />,
    [],
  );

  return <nav className={root}>{navbarItems.map(renderNavbarItem)}</nav>;
};
