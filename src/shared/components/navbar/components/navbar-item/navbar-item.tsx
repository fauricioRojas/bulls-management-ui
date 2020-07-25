import classNames from 'classnames';
import React, { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { INavbarItem } from './interfaces/navbar-item.interface';
import { useStyles } from './navbar-item.style';

interface INavbarItemProps extends INavbarItem {
  iconClass: string;
  text: string;
  to: string;
}

export const NavbarItem: FC<INavbarItemProps> = ({ iconClass, text, to }) => {
  const { pathname } = useLocation();
  const { root } = useStyles();

  return (
    <Link className={classNames(root, { active: to === pathname })} to={to}>
      <i className={iconClass} />
      <label>{text}</label>
    </Link>
  );
};
