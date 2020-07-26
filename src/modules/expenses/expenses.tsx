import React, { FC } from 'react';

import { Header } from '../../shared/components/header/header';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { useStyles } from './expenses.style';

export const Expenses: FC = () => {
  const { root } = useStyles();

  const onClickAdd = () => console.log('add');

  return (
    <Wrapper className={root}>
      <Header title="Expenses" onClickAdd={onClickAdd} />
      <SectionHeader title="Expenses" />
    </Wrapper>
  );
};
