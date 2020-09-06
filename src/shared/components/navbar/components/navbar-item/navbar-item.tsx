import classNames from 'classnames';
import React, { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Icon } from 'shared/components/icon/icon';
import { Typography } from 'shared/components/typography/typography';
import { INavbarItem } from './interfaces/navbar-item.interface';
import { useStyles } from './navbar-item.style';

interface INavbarItemProps extends INavbarItem {}

export const NavbarItem: FC<INavbarItemProps> = ({ iconClass, text, to }) => {
  const { pathname } = useLocation();
  const { root } = useStyles();

  return (
    <Link className={classNames(root, { active: to === pathname })} to={to}>
      <Icon iconClass={iconClass} size="large" />
      <Typography variant="caption" bold={true}>
        {text}
      </Typography>
    </Link>
  );
};
