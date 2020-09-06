import { createContext, useContext } from 'react';

import { IExpense } from 'shared/types/expense.interface';

interface IExpenseContext {
  isLoading: boolean;
  expenses: IExpense[];
  getExpenses: () => void;
  pushExpense: (expense: IExpense) => void;
}

export const ExpenseContext = createContext<IExpenseContext>({
  isLoading: false,
  expenses: [],
  getExpenses: () => undefined,
  pushExpense: () => undefined,
});

export const useExpense = () => useContext(ExpenseContext);
