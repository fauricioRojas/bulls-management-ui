import { useFormik } from 'formik';
import React, { FC } from 'react';

import { Button } from '../../../../shared/components/button/button';
import { FormRow } from '../../../../shared/components/form-row/form-row';
import { Form } from '../../../../shared/components/form/form';
import { Input } from '../../../../shared/components/input/input';
import { useDrawer } from '../../../../shared/context/drawer/drawer.context';
import { useExpense } from '../../../../shared/context/expense/expense.context';
import { useSnackbar } from '../../../../shared/context/snackbar/snackbar.context';
import { expenseService } from '../../../../shared/services/expense/expense.service';
import { useStyles } from './expense-form.style';
import { expenseFormInitialValues } from './utils/expense-form-initial-values';
import { expenseFormSchema } from './utils/expense-form.schema';

export const ExpenseForm: FC = () => {
  const { root } = useStyles();
  const { pushExpense } = useExpense();
  const { showSnackbar } = useSnackbar();
  const { hideDrawer } = useDrawer();
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: expenseFormInitialValues,
    validationSchema: expenseFormSchema,
    onSubmit: async expenseValues => {
      try {
        const newExpense = await expenseService.createExpense(expenseValues);
        pushExpense(newExpense);
        showSnackbar({ type: 'success', body: 'Saved expense' });
        hideDrawer();
      } catch {
        showSnackbar({ type: 'error', body: 'Not saved expense' });
      }
    },
  });

  return (
    <Form className={root} onSubmit={handleSubmit}>
      <FormRow label="Description" align="vertical" required={true}>
        <Input
          id="description"
          name="description"
          placeholder="Description"
          type="text"
          value={values.description}
          onChange={handleChange}
          touched={touched.description}
          errorMessage={errors.description}
        />
      </FormRow>
      <FormRow label="Cost" align="vertical" required={true}>
        <Input
          id="cost"
          name="cost"
          placeholder="Cost"
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
          Add Expense
        </Button>
      </div>
    </Form>
  );
};
