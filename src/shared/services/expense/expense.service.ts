import { IExpenseCreate } from '../../types/expense-create.interface';
import { IExpense } from '../../types/expense.interface';
import { uuidv4 } from '../../utils/helper';

interface IExpenseService {
  createExpense(expense: IExpenseCreate): Promise<IExpense>;
}

class ExpenseService implements IExpenseService {
  public createExpense = async (expense: IExpenseCreate): Promise<IExpense> => {
    try {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ ...expense, expenseId: uuidv4(), purchaseDate: Date.now() });
        }, 3000);
      });
    } catch (error) {
      throw error;
    }
  };
}

export const expenseService = new ExpenseService();
