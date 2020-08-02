import { ISelectOption } from '../../components/select/interfaces/select.interface';
import { languageTypes } from './constants/language-types.constants';
import { ILanguageTranslation } from './interfaces/language.interface';

export const getLanguageOptions = (languageTranslation: ILanguageTranslation): ISelectOption[] => {
  return languageTypes.map(type => ({ label: languageTranslation[type], value: type }));
};
