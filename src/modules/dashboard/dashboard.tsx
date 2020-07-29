import React, { FC } from 'react';

import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { useStyles } from './dashboard.style';

export const Dashboard: FC = () => {
  const { root } = useStyles();

  return <Wrapper className={root} title="Dashboard" />;
};
