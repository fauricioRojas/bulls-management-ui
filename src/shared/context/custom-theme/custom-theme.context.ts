import { createContext } from 'react';

export interface ICustomThemeContext {
  toggleTheme: () => void;
}

export const CustomThemeContext = createContext<ICustomThemeContext>({
  toggleTheme: () => undefined,
});
