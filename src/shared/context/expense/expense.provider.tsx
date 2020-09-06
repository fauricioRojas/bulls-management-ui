import React, { useCallback, useState, FC } from 'react';

import { expenseService } from 'shared/services/expense/expense.service';
import { IExpense } from 'shared/types/expense.interface';
import { ExpenseContext } from './expense.context';

interface IExpenseState {
  isLoading: boolean;
  wasLoaded: boolean;
  expenses: IExpense[];
}

export const ExpenseProvider: FC = ({ children }) => {
  const [{ isLoading, wasLoaded, expenses }, setState] = useState<IExpenseState>({
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
    <ExpenseContext.Provider value={{ isLoading, expenses, getExpenses, pushExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};
