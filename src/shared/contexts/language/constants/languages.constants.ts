import { ILanguageTranslation, LanguageType } from '../interfaces/language.interface';
import { ENGLISH } from './english-language.constants';
import { SPANISH } from './spanish-language.constants';

export const LANGUAGES: { [K in LanguageType]: ILanguageTranslation } = {
  en: ENGLISH,
  es: SPANISH,
};
