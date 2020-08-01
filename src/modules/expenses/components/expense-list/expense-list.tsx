import React, { useCallback, FC } from 'react';

import { IExpense } from '../../../../shared/types/expense.interface';
import { ExpenseItem } from './components/expense-item/expense-item';

interface IExpenseListProps {
  expenses: IExpense[];
}

export const ExpenseList: FC<IExpenseListProps> = ({ expenses }) => {
  const renderExpenseItem = useCallback(
    (expense: IExpense) => <ExpenseItem key={expense.expenseId} expense={expense} />,
    [],
  );

  return <ul>{expenses.map(renderExpenseItem)}</ul>;
};