import classNames from 'classnames';
import React, { FC } from 'react';

import { useStyles } from './list-item.style';

interface IListItemProps {
  singleLine?: boolean;
}

export const ListItem: FC<IListItemProps> = ({ singleLine, children }) => {
  const { root } = useStyles();

  return <li className={classNames(root, { 'single-line': singleLine })}>{children}</li>;
};
