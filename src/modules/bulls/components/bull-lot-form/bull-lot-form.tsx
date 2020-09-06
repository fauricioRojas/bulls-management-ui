import { useFormik } from 'formik';
import React, { FC } from 'react';

import { Button } from 'shared/components/button/button';
import { FormRow } from 'shared/components/form-row/form-row';
import { Form } from 'shared/components/form/form';
import { Input } from 'shared/components/input/input';
import { useBullLots } from 'shared/contexts/bull-lots/bull-lots.context';
import { useDrawer } from 'shared/contexts/drawer/drawer.context';
import { useLanguage } from 'shared/contexts/language/language.context';
import { useSnackbar } from 'shared/contexts/snackbar/snackbar.context';
import { bullLotService } from 'shared/services/bull-lot/bull-lot.service';
import { useStyles } from './bull-lot-form.style';
import { useBullLotFormSchema } from './hooks/use-bull-lot-form-schema';
import { bullLotFormInitialValues } from './utils/bull-lot-form-initial-values';

export const BullLotForm: FC = () => {
  const { root } = useStyles();
  const { languageTranslation } = useLanguage();
  const { bullLotFormSchema } = useBullLotFormSchema();
  const { pushBullLot } = useBullLots();
  const { showSnackbar } = useSnackbar();
  const { hideDrawer } = useDrawer();
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: bullLotFormInitialValues,
    validationSchema: bullLotFormSchema,
    onSubmit: async bullLotValues => {
      try {
        const newBullLot = await bullLotService.createBullLot(bullLotValues);
        pushBullLot(newBullLot);
        showSnackbar({ type: 'success', body: languageTranslation.savedBullLot });
        hideDrawer();
      } catch {
        showSnackbar({ type: 'error', body: languageTranslation.notSavedBullLot });
      }
    },
  });

  return (
    <Form className={root} onSubmit={handleSubmit}>
      <FormRow label={languageTranslation.bullsAmount} align="vertical" required={true}>
        <Input
          id="amount"
          name="amount"
          placeholder={languageTranslation.bullsAmount}
          type="text"
          inputMode="numeric"
          value={values.amount}
          onChange={handleChange}
          touched={touched.amount}
          errorMessage={errors.amount}
        />
      </FormRow>
      <FormRow label={languageTranslation.purchasePrice} align="vertical" required={true}>
        <Input
          id="purchasePrice"
          name="purchasePrice"
          placeholder={languageTranslation.purchasePrice}
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
          {languageTranslation.addBullLot}
        </Button>
      </div>
    </Form>
  );
};
