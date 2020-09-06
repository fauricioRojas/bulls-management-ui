import React, { FC } from 'react';
import { ThemeProvider } from 'react-jss';

import { useLocalStorage } from 'shared/hooks/use-local-storage/use-local-storage';
import { DARK_THEME, LIGHT_THEME } from 'shared/style/theming/theme';
import { CustomThemeContext } from './custom-theme.context';

export const CustomThemeProvider: FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage<boolean>('dark-theme', false);

  const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME;

  const toggleTheme = () => setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme);

  return (
    <ThemeProvider theme={theme}>
      <CustomThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        {children}
      </CustomThemeContext.Provider>
    </ThemeProvider>
  );
};
