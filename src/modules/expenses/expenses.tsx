import React, { useCallback, useEffect, FC } from 'react';

import { Wrapper } from 'shared/components/wrapper/wrapper';
import { useDrawer } from 'shared/contexts/drawer/drawer.context';
import { useExpenses } from 'shared/contexts/expenses/expenses.context';
import { useLanguage } from 'shared/contexts/language/language.context';
import { ExpenseForm } from './components/expense-form/expense-form';
import { ExpenseListLoading } from './components/expense-list-loading/expense-list-loading';
import { ExpenseList } from './components/expense-list/expense-list';
import { useStyles } from './expenses.style';

export const Expenses: FC = () => {
  const { languageTranslation } = useLanguage();
  const { expenses, isLoading, getExpenses } = useExpenses();
  const { showDrawer } = useDrawer();
  const { root } = useStyles();

  useEffect(() => {
    getExpenses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showExpenseForm = useCallback(() => {
    showDrawer({
      title: languageTranslation.newExpense,
      body: <ExpenseForm />,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper className={root} title={languageTranslation.expenses} onClickAdd={showExpenseForm}>
      {isLoading ? <ExpenseListLoading /> : <ExpenseList expenses={expenses} />}
    </Wrapper>
  );
};
