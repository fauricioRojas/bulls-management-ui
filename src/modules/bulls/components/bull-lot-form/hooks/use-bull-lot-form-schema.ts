import { useMemo } from 'react';
import * as Yup from 'yup';

import { useLanguage } from '../../../../../shared/context/language/language.context';

export const useBullLotFormSchema = () => {
  const { language, translate } = useLanguage();
  const bullLotFormSchema = useMemo(() => {
    return Yup.object().shape({
      amount: Yup.number()
        .min(1, translate('minNumeric'))
        .max(100, translate('tooLong'))
        .required(translate('required')),
      purchasePrice: Yup.number()
        .min(1, translate('minNumeric'))
        .max(9999999, translate('tooLong'))
        .required(translate('required')),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return { bullLotFormSchema };
};
