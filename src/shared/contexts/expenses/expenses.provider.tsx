import React, { useCallback, useState, FC } from 'react';

import { expenseService } from 'shared/services/expense/expense.service';
import { IExpense } from 'shared/types/expense.interface';
import { ExpensesContext } from './expenses.context';

interface IExpensesState {
  isLoading: boolean;
  wasLoaded: boolean;
  expenses: IExpense[];
}

export const ExpensesProvider: FC = ({ children }) => {
  const [{ isLoading, wasLoaded, expenses }, setState] = useState<IExpensesState>({
    isLoading: false,
    wasLoaded: false,
    expenses: [],
  });

  const getExpenses = async () => {
    if (!wasLoaded) {
      setState(prevState => ({ ...prevState, isLoading: true }));
      const response = await expenseService.getExpenses();
      setState(prevState => ({
        ...prevState,
        isLoading: false,
        wasLoaded: true,
        expenses: response,
      }));
    }
  };

  const pushExpense = useCallback((expense: IExpense) => {
    setState(prevState => ({
      ...prevState,
      expenses: prevState.expenses.concat(expense),
    }));
  }, []);

  return (
    <ExpensesContext.Provider value={{ isLoading, expenses, getExpenses, pushExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};
