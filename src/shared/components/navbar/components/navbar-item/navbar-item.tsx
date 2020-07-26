import classNames from 'classnames';
import React, { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Icon } from '../../../icon/icon';
import { Typography } from '../../../typography/typography';
import { INavbarItem } from './interfaces/navbar-item.interface';
import { useStyles } from './navbar-item.style';

interface INavbarItemProps extends INavbarItem {}

export const NavbarItem: FC<INavbarItemProps> = ({ iconClass, text, to }) => {
  const { pathname } = useLocation();
  const { root } = useStyles();

  return (
    <Link className={classNames(root, { active: to === pathname })} to={to}>
      <Icon iconClass={iconClass} size="large" />
      <Typography type="caption" bold={true}>
        {text}
      </Typography>
    </Link>
  );
};
