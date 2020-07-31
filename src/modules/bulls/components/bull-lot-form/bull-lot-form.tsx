import { useFormik } from 'formik';
import React, { FC } from 'react';

import { Button } from '../../../../shared/components/button/button';
import { FormRow } from '../../../../shared/components/form-row/form-row';
import { Form } from '../../../../shared/components/form/form';
import { Input } from '../../../../shared/components/input/input';
import { useBullLot } from '../../../../shared/context/bull-lot/bull-lot.context';
import { useSnackbar } from '../../../../shared/context/snackbar/snackbar.context';
import { bullLotService } from '../../../../shared/services/bull-lot/bull-lot.service';
import { useStyles } from './bull-lot-form.style';
import { bullLotFormInitialValues } from './utils/bull-lot-form-initial-values';
import { bullLotFormSchema } from './utils/bull-lot-form.schema';

export const BullLotForm: FC = () => {
  const { root } = useStyles();
  const { pushBullLot } = useBullLot();
  const { showSnackbar } = useSnackbar();
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: bullLotFormInitialValues,
    validationSchema: bullLotFormSchema,
    onSubmit: async bullLotValues => {
      try {
        const newBullLot = await bullLotService.createBullLot(bullLotValues);
        pushBullLot(newBullLot);
        showSnackbar({ type: 'success', body: 'Saved bull lot' });
      } catch {
        showSnackbar({ type: 'error', body: 'Not saved bull lot' });
      }
    },
  });

  return (
    <Form className={root} onSubmit={handleSubmit}>
      <FormRow label="Amount" align="vertical" required={true}>
        <Input
          id="amount"
          name="amount"
          placeholder="Amount"
          type="text"
          inputMode="numeric"
          value={values.amount}
          onChange={handleChange}
          touched={touched.amount}
          errorMessage={errors.amount}
        />
      </FormRow>
      <FormRow label="Purchase Price" align="vertical" required={true}>
        <Input
          id="purchasePrice"
          name="purchasePrice"
          placeholder="Purchase Price"
          type="text"
          inputMode="numeric"
          value={values.purchasePrice}
          onChange={handleChange}
          touched={touched.purchasePrice}
          errorMessage={errors.purchasePrice}
        />
      </FormRow>
      <div className="buttons-wrapper">
        <Button fullWidth={true} variant="primary" type="submit" size="large">
          Add Bull Lot
        </Button>
      </div>
    </Form>
  );
};
