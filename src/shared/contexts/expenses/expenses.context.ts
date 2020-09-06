import { createContext, useContext } from 'react';

import { IExpense } from 'shared/types/expense.interface';

interface IExpensesContext {
  isLoading: boolean;
  expenses: IExpense[];
  getExpenses: () => void;
  pushExpense: (expense: IExpense) => void;
}

export const ExpensesContext = createContext<IExpensesContext>({
  isLoading: false,
  expenses: [],
  getExpenses: () => undefined,
  pushExpense: () => undefined,
});

export const useExpenses = () => useContext(ExpensesContext);
