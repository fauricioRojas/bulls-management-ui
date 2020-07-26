import React, { FC } from 'react';

import { Header } from '../../shared/components/header/header';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { useStyles } from './dashboard.style';

export const Dashboard: FC = () => {
  const { root } = useStyles();

  return (
    <Wrapper className={root}>
      <Header title="Dashboard" />
      <SectionHeader title="Dashboard" />
    </Wrapper>
  );
};
