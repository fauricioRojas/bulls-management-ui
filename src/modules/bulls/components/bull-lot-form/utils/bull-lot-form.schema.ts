import * as Yup from 'yup';

import { FORM_ERROR_MESSAGE } from '../../../../../shared/constants/form-error-message.constants';

const { TOO_LONG, REQUIRED, MIN_NUMERIC } = FORM_ERROR_MESSAGE;

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
