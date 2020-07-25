import React, { FC } from 'react';

import { SectionHeader } from '../../shared/components/section-header/section-header';
import { useStyles } from './expenses.style';

export const Expenses: FC = () => {
  const { root } = useStyles();

  return (
    <div className={root}>
      <SectionHeader title="Expenses" />
    </div>
  );
};
