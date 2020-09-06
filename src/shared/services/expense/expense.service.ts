import { IExpenseCreate } from 'shared/types/expense-create.interface';
import { IExpense } from 'shared/types/expense.interface';
import { uuidv4 } from 'shared/utils/helper';

interface IExpenseService {
  createExpense(expense: IExpenseCreate): Promise<IExpense>;
  getExpenses: () => Promise<IExpense[]>;
}

class ExpenseService implements IExpenseService {
  public createExpense = async (expense: IExpenseCreate): Promise<IExpense> => {
    try {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ ...expense, expenseId: uuidv4(), purchaseDate: Date.now() });
        }, 1000);
      });
    } catch (error) {
      throw error;
    }
  };

  public getExpenses = async (): Promise<IExpense[]> => {
    try {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            {
              expenseId: uuidv4(),
              description: 'Expense 1',
              cost: 1000000,
              purchaseDate: 1595645518000,
            },
            {
              expenseId: uuidv4(),
              description: 'Expense 2',
              cost: 1000000,
              purchaseDate: 1595731918000,
            },
            {
              expenseId: uuidv4(),
              description: 'Expense 3',
              cost: 1000000,
              purchaseDate: 1595818318000,
            },
            {
              expenseId: uuidv4(),
              description: 'Expense 4',
              cost: 1000000,
              purchaseDate: 1595904718000,
            },
            {
              expenseId: uuidv4(),
              description: 'Expense 5',
              cost: 1000000,
              purchaseDate: 1595991118000,
            },
          ]);
        }, 2000);
      });
    } catch (error) {
      throw error;
    }
  };
}

export const expenseService = new ExpenseService();
