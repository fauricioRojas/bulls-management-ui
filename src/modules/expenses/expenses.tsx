import React, { useState, FC } from 'react';

import { Header } from '../../shared/components/header/header';
import { InputSliderWrapper } from '../../shared/components/input-slider-wrapper/input-slider-wrapper';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { ExpenseForm } from './components/expense-form/expense-form';
import { useStyles } from './expenses.style';

export const Expenses: FC = () => {
  const [isExpenseFormVisible, setIsExpenseFormVisible] = useState(false);
  const { root } = useStyles();

  const toggleIsExpenseFormVisible = () =>
    setIsExpenseFormVisible(prevIsExpenseFormVisible => !prevIsExpenseFormVisible);

  return (
    <Wrapper className={root}>
      <Header title="Expenses" onClickAdd={toggleIsExpenseFormVisible} />
      <SectionHeader title="Expenses" />
      <InputSliderWrapper
        title="New Expense"
        isVisible={isExpenseFormVisible}
        onCancel={toggleIsExpenseFormVisible}
      >
        <ExpenseForm />
      </InputSliderWrapper>
    </Wrapper>
  );
};
