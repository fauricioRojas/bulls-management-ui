import React, { FC } from 'react';

import { useStyles } from './list-item-wrapper.style';

export const ListItemWrapper: FC = ({ children }) => {
  const { root } = useStyles();

  return <li className={root}>{children}</li>;
};
