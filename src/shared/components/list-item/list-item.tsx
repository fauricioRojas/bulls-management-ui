import React, { FC } from 'react';

import { useStyles } from './list-item.style';

export const ListItem: FC = ({ children }) => {
  const { root } = useStyles();

  return <li className={root}>{children}</li>;
};
