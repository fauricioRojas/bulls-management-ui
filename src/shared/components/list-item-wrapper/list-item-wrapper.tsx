import classNames from 'classnames';
import React, { FC } from 'react';

import { useStyles } from './list-item-wrapper.style';

interface IListItemWrapperProps {
  singleLine?: boolean;
}

export const ListItemWrapper: FC<IListItemWrapperProps> = ({ singleLine, children }) => {
  const { root } = useStyles();

  return <li className={classNames(root, { 'single-line': singleLine })}>{children}</li>;
};
