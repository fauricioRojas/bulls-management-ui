import React, { FC } from 'react';

import { useStyles } from './list.style';

export const List: FC = ({ children }) => {
  const { root } = useStyles();

  return <ul className={root}>{children}</ul>;
};
