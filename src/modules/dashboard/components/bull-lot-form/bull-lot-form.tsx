import { useFormik } from 'formik';
import React, { FC } from 'react';

import { Form } from '../../../../shared/components/form/form';

import Button from '../../../../shared/components/button/button';
import { FormRow } from '../../../../shared/components/form-row/form-row';
import { Input } from '../../../../shared/components/input/input';
import { SlidingWrapper } from '../../../../shared/components/sliding-wrapper/sliding-wrapper';
import { useStyles } from './bull-lot-form.style';
import { bullLotFormInitialValues } from './utils/bull-lot-form-initial-values';
import { createBullLot } from './utils/bull-lot-form.helper';
import { bullLotFormSchema } from './utils/bull-lot-form.schema';

interface IBullLotFormProps {
  isVisible: boolean;
  onCancel: () => void;
}

export const BullLotForm: FC<IBullLotFormProps> = ({ isVisible, onCancel }) => {
  const { root } = useStyles();
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: bullLotFormInitialValues,
    validationSchema: bullLotFormSchema,
    onSubmit: async bullLotValues => {
      try {
        const newBullLot = await createBullLot(bullLotValues);
        console.log('newBullLot:', newBullLot);
      } catch (err) {
        console.log('err:', err);
      }
    },
  });

  return (
    <SlidingWrapper title="New Bull Lot" isVisible={isVisible} onCancel={onCancel}>
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
            Create Bull Lot
          </Button>
        </div>
      </Form>
    </SlidingWrapper>
  );
};
