import React, { useState, FC } from 'react';

import { InputSliderWrapper } from '../../shared/components/input-slider-wrapper/input-slider-wrapper';
import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { ExpenseForm } from './components/expense-form/expense-form';
import { useStyles } from './expenses.style';

export const Expenses: FC = () => {
  const [isExpenseFormVisible, setIsExpenseFormVisible] = useState(false);
  const { root } = useStyles();

  const toggleIsExpenseFormVisible = () =>
    setIsExpenseFormVisible(prevIsExpenseFormVisible => !prevIsExpenseFormVisible);

  return (
    <Wrapper className={root} title="Expenses" onClickAdd={toggleIsExpenseFormVisible}>
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
