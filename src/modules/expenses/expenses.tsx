import React, { useCallback, FC } from 'react';

import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { useDrawer } from '../../shared/context/drawer/drawer.context';
import { ExpenseForm } from './components/expense-form/expense-form';
import { useStyles } from './expenses.style';

export const Expenses: FC = () => {
  const { showDrawer } = useDrawer();
  const { root } = useStyles();

  const showExpenseForm = useCallback(() => {
    showDrawer({
      title: 'New Expense',
      body: <ExpenseForm />,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Wrapper className={root} title="Expenses" onClickAdd={showExpenseForm} />;
};
