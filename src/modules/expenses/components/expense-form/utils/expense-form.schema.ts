import * as Yup from 'yup';

import {
  MIN_NUMERIC,
  REQUIRED,
  TOO_LONG,
  TOO_SHORT,
} from '../../../../../shared/constants/form-error-messages.constants';

export const expenseFormSchema = Yup.object().shape({
  description: Yup.string()
    .min(5, TOO_SHORT)
    .max(100, TOO_LONG)
    .required(REQUIRED),
  cost: Yup.number()
    .min(1, MIN_NUMERIC)
    .max(9999999, TOO_LONG)
    .required(REQUIRED),
});
