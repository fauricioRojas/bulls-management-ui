import { useFormik } from 'formik';
import React, { FC } from 'react';

import { Button } from '../../../../shared/components/button/button';
import { FormRow } from '../../../../shared/components/form-row/form-row';
import { Form } from '../../../../shared/components/form/form';
import { Input } from '../../../../shared/components/input/input';
import { expenseService } from '../../../../shared/services/expense/expense.service';
import { useStyles } from './expense-form.style';
import { expenseFormInitialValues } from './utils/expense-form-initial-values';
import { expenseFormSchema } from './utils/expense-form.schema';

export const ExpenseForm: FC = () => {
  const { root } = useStyles();
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: expenseFormInitialValues,
    validationSchema: expenseFormSchema,
    onSubmit: async expenseValues => {
      try {
        const newExpense = await expenseService.createExpense(expenseValues);
        console.log('newExpense:', newExpense);
      } catch (err) {
        console.log('err:', err);
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
