import { useMemo } from 'react';
import * as Yup from 'yup';

import { useLanguage } from '../../../../../shared/context/language/language.context';

export const useBullLotFormSchema = () => {
  const { language, languageTranslation } = useLanguage();
  const bullLotFormSchema = useMemo(() => {
    return Yup.object().shape({
      amount: Yup.number()
        .min(1, languageTranslation.minNumeric)
        .max(100, languageTranslation.tooLong)
        .required(languageTranslation.required),
      purchasePrice: Yup.number()
        .min(1, languageTranslation.minNumeric)
        .max(9999999, languageTranslation.tooLong)
        .required(languageTranslation.required),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return { bullLotFormSchema };
};
