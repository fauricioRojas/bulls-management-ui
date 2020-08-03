import React, { useCallback, useState, FC } from 'react';

import { ISelectOption } from '../../components/select/interfaces/select.interface';
import { localStorageService } from '../../services/local-storage/local-storage.service';
import { LANGUAGES } from './constants/languages.constants';
import { ILanguageTranslation, LanguageType } from './interfaces/language.interface';
import { LanguageContext } from './language.context';
import { getLanguageOptions } from './language.helper';

interface ILanguageState {
  language: LanguageType;
  languageTranslation: ILanguageTranslation;
  languageOptions: ISelectOption[];
}

const LANGUAGE_KEY = 'language';
const languageInStorage = localStorageService.get<LanguageType>(LANGUAGE_KEY) || 'es';

export const LanguageProvider: FC = ({ children }) => {
  const [{ language, languageOptions, languageTranslation }, setState] = useState<ILanguageState>({
    language: languageInStorage,
    languageTranslation: LANGUAGES[languageInStorage],
    languageOptions: getLanguageOptions(LANGUAGES[languageInStorage]),
  });

  const changeLanguage = useCallback((newLanguage: LanguageType) => {
    setState({
      language: newLanguage,
      languageTranslation: LANGUAGES[newLanguage],
      languageOptions: getLanguageOptions(LANGUAGES[newLanguage]),
    });
    localStorageService.set(LANGUAGE_KEY, newLanguage);
  }, []);

  return (
    <LanguageContext.Provider
      value={{ language, languageOptions, languageTranslation, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
