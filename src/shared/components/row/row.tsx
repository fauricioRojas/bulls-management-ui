import React, { FC } from 'react';

import { useStyles } from './row.style';

export const Row: FC = ({ children }) => {
  const { root } = useStyles();

  return <div className={root}>{children}</div>;
};
