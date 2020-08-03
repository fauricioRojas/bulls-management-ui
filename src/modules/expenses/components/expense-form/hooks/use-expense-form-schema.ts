import { useMemo } from 'react';
import * as Yup from 'yup';

import { useLanguage } from '../../../../../shared/context/language/language.context';

export const useExpenseFormSchema = () => {
  const { language, languageTranslation } = useLanguage();
  const expenseFormSchema = useMemo(() => {
    return Yup.object().shape({
      description: Yup.string()
        .min(5, languageTranslation.tooShort)
        .max(100, languageTranslation.tooLong)
        .required(languageTranslation.required),
      cost: Yup.number()
        .min(1, languageTranslation.minNumeric)
        .max(9999999, languageTranslation.tooLong)
        .required(languageTranslation.required),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return { expenseFormSchema };
};
