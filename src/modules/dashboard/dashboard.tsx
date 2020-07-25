import React, { FC } from 'react';

import { SectionHeader } from '../../shared/components/section-header/section-header';
import { useStyles } from './dashboard.style';

export const Dashboard: FC = () => {
  const { root } = useStyles();

  return (
    <div className={root}>
      <SectionHeader title="Dashboard" />
    </div>
  );
};
