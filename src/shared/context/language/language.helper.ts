import { ISelectOption } from 'shared/components/select/interfaces/select.interface';
import { languageTypes } from './constants/language-types.constants';
import { ILanguageTranslation } from './interfaces/language.interface';

export const getLanguageOptions = (languageTranslation: ILanguageTranslation): ISelectOption[] =>
  languageTypes.map(type => ({ label: languageTranslation[type], value: type }));
