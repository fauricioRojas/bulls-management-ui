import React, { useCallback, useEffect, FC } from 'react';

import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { useDrawer } from '../../shared/context/drawer/drawer.context';
import { useExpense } from '../../shared/context/expense/expense.context';
import { useLanguage } from '../../shared/context/language/language.context';
import { ExpenseForm } from './components/expense-form/expense-form';
import { ExpenseListLoading } from './components/expense-list-loading/expense-list-loading';
import { ExpenseList } from './components/expense-list/expense-list';
import { useStyles } from './expenses.style';

export const Expenses: FC = () => {
  const { translate } = useLanguage();
  const { expenses, isLoading, getExpenses } = useExpense();
  const { showDrawer } = useDrawer();
  const { root } = useStyles();

  useEffect(() => {
    getExpenses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showExpenseForm = useCallback(() => {
    showDrawer({
      title: translate('newExpense'),
      body: <ExpenseForm />,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper className={root} title={translate('expenses')} onClickAdd={showExpenseForm}>
      {isLoading ? <ExpenseListLoading /> : <ExpenseList expenses={expenses} />}
    </Wrapper>
  );
};
