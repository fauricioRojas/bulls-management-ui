import { useMemo } from 'react';
import * as Yup from 'yup';

import { useLanguage } from '../../../../../shared/context/language/language.context';

export const useExpenseFormSchema = () => {
  const { language, translate } = useLanguage();
  const expenseFormSchema = useMemo(() => {
    return Yup.object().shape({
      description: Yup.string()
        .min(5, translate('tooShort'))
        .max(100, translate('tooLong'))
        .required(translate('required')),
      cost: Yup.number()
        .min(1, translate('minNumeric'))
        .max(9999999, translate('tooLong'))
        .required(translate('required')),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return { expenseFormSchema };
};
