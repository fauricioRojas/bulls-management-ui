import { createContext, useContext } from 'react';

import { ISelectOption } from 'shared/components/select/interfaces/select.interface';
import { ILanguageTranslation, LanguageType } from './interfaces/language.interface';

interface ILanguageContext {
  language: LanguageType;
  languageOptions: ISelectOption[];
  languageTranslation: ILanguageTranslation;
  changeLanguage: (language: LanguageType) => void;
}

export const LanguageContext = createContext<ILanguageContext>({
  language: 'es',
  languageOptions: [],
  languageTranslation: {} as ILanguageTranslation,
  changeLanguage: () => undefined,
});

export const useLanguage = () => useContext(LanguageContext);
