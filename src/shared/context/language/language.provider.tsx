import React, { FC } from 'react';

import { useLocalStorage } from '../../hooks/use-local-storage/use-local-storage';
import { LANGUAGES } from './constants/languages.constants';
import { LanguageType } from './interfaces/language.interface';
import { LanguageContext } from './language.context';
import { getLanguageOptions } from './language.helper';

export const LanguageProvider: FC = ({ children }) => {
  const [language, setLanguage] = useLocalStorage<LanguageType>('language', 'es');

  return (
    <LanguageContext.Provider
      value={{
        language,
        languageOptions: getLanguageOptions(LANGUAGES[language]),
        languageTranslation: LANGUAGES[language],
        changeLanguage: setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
