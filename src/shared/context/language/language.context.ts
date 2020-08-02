import { createContext, useContext } from 'react';

import { ISelectOption } from '../../components/select/interfaces/select.interface';
import { ILanguageTranslation, LanguageType } from './interfaces/language.interface';

interface ILanguageContext {
  language: LanguageType;
  languageOptions: ISelectOption[];
  changeLanguage: (language: LanguageType) => void;
  translate: (key: keyof ILanguageTranslation) => string;
}

export const LanguageContext = createContext<ILanguageContext>({
  language: 'es',
  languageOptions: [],
  changeLanguage: () => undefined,
  translate: () => '',
});

export const useLanguage = () => useContext(LanguageContext);
