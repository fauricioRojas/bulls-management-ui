import { useFormik } from 'formik';
import React, { FC } from 'react';

import { Button } from 'shared/components/button/button';
import { FormRow } from 'shared/components/form-row/form-row';
import { Form } from 'shared/components/form/form';
import { Input } from 'shared/components/input/input';
import { useDrawer } from 'shared/contexts/drawer/drawer.context';
import { useExpenses } from 'shared/contexts/expenses/expenses.context';
import { useLanguage } from 'shared/contexts/language/language.context';
import { useSnackbar } from 'shared/contexts/snackbar/snackbar.context';
import { expenseService } from 'shared/services/expense/expense.service';
import { useStyles } from './expense-form.style';
import { useExpenseFormSchema } from './hooks/use-expense-form-schema';
import { expenseFormInitialValues } from './utils/expense-form-initial-values';

export const ExpenseForm: FC = () => {
  const { root } = useStyles();
  const { languageTranslation } = useLanguage();
  const { pushExpense } = useExpenses();
  const { showSnackbar } = useSnackbar();
  const { hideDrawer } = useDrawer();
  const { expenseFormSchema } = useExpenseFormSchema();
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: expenseFormInitialValues,
    validationSchema: expenseFormSchema,
    onSubmit: async expenseValues => {
      try {
        const newExpense = await expenseService.createExpense(expenseValues);
        pushExpense(newExpense);
        showSnackbar({ type: 'success', body: languageTranslation.savedExpense });
        hideDrawer();
      } catch {
        showSnackbar({ type: 'error', body: languageTranslation.notSavedExpense });
      }
    },
  });

  return (
    <Form className={root} onSubmit={handleSubmit}>
      <FormRow label={languageTranslation.description} align="vertical" required={true}>
        <Input
          id="description"
          name="description"
          placeholder={languageTranslation.description}
          type="text"
          value={values.description}
          onChange={handleChange}
          touched={touched.description}
          errorMessage={errors.description}
        />
      </FormRow>
      <FormRow label={languageTranslation.cost} align="vertical" required={true}>
        <Input
          id="cost"
          name="cost"
          placeholder={languageTranslation.cost}
          type="text"
          inputMode="numeric"
          value={values.cost}
          onChange={handleChange}
          touched={touched.cost}
          errorMessage={errors.cost}
        />
      </FormRow>
      <div className="buttons-wrapper">
        <Button fullWidth={true} variant="primary" type="submit" size="large">
          {languageTranslation.addExpense}
        </Button>
      </div>
    </Form>
  );
};
