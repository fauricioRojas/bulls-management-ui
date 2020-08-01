import { createContext } from 'react';

interface ICustomThemeContext {
  toggleTheme: () => void;
}

export const CustomThemeContext = createContext<ICustomThemeContext>({
  toggleTheme: () => undefined,
});
