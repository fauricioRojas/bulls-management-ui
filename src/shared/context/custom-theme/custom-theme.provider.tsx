import React, { useState, FC } from 'react';
import { ThemeProvider } from 'react-jss';

import { localStorageService } from '../../services/local-storage/local-storage.service';
import { DARK_THEME, ITheme, LIGHT_THEME } from '../../style/theming/theme';
import { CustomThemeContext } from './custom-theme.context';

interface ICustomThemeState {
  isDarkTheme: boolean;
  theme: ITheme;
}

const THEME_KEY = 'dark-theme';
const isDarkThemeInStorage = localStorageService.get<boolean>(THEME_KEY);

export const CustomThemeProvider: FC = ({ children }) => {
  const [{ isDarkTheme, theme }, setState] = useState<ICustomThemeState>({
    isDarkTheme: !!isDarkThemeInStorage,
    theme: isDarkThemeInStorage ? DARK_THEME : LIGHT_THEME,
  });

  const toggleTheme = () => {
    setState(prevState => {
      localStorageService.set(THEME_KEY, !isDarkTheme);
      return {
        isDarkTheme: !prevState.isDarkTheme,
        theme: prevState.isDarkTheme ? LIGHT_THEME : DARK_THEME,
      };
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CustomThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        {children}
      </CustomThemeContext.Provider>
    </ThemeProvider>
  );
};
