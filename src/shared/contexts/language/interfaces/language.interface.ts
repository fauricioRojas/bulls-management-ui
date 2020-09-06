export type LanguageType = 'es' | 'en';

type Language = { [K in LanguageType]: string };

export interface ILanguageTranslation extends Language {
  dashboard: string;
  bulls: string;
  expenses: string;
  settings: string;
  theme: string;
  language: string;
  bullsAmount: string;
  purchasePrice: string;
  purchaseDate: string;
  bullLotOnFarm: string;
  description: string;
  cost: string;
  newBullLot: string;
  addBullLot: string;
  newExpense: string;
  addExpense: string;
  cancel: string;
  savedBullLot: string;
  notSavedBullLot: string;
  savedExpense: string;
  notSavedExpense: string;
  // Form error messages
  required: string;
  minNumeric: string;
  tooShort: string;
  tooLong: string;
}
