import * as Yup from 'yup';

import {
  MIN_NUMERIC,
  REQUIRED,
  TOO_LONG,
} from '../../../../../shared/constants/form-error-messages.constants';

export const bullLotFormSchema = Yup.object().shape({
  amount: Yup.number()
    .min(1, MIN_NUMERIC)
    .max(100, TOO_LONG)
    .required(REQUIRED),
  purchasePrice: Yup.number()
    .min(1, MIN_NUMERIC)
    .max(9999999, TOO_LONG)
    .required(REQUIRED),
});
