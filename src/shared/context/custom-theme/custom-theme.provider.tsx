import React, { useCallback, useState, FC } from 'react';
import { ThemeProvider } from 'react-jss';

import { useDidUpdate } from '../../hooks/use-did-update/use-did-update';
import { localStorageService } from '../../services/local-storage/local-storage.service';
import { DARK_THEME, ITheme, LIGHT_THEME } from '../../style/theming/theme';
import { CustomThemeContext } from './custom-theme.context';

interface ICustomThemeState {
  isDarkTheme: boolean;
  theme: ITheme;
}

const THEME_KEY = 'dark-theme';

export const CustomThemeProvider: FC = ({ children }) => {
  const [{ isDarkTheme, theme }, setState] = useState<ICustomThemeState>({
    isDarkTheme: false,
    theme: localStorageService.get<boolean>(THEME_KEY) ? DARK_THEME : LIGHT_THEME,
  });

  const toggleTheme = useCallback(() => {
    setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
      theme: prevState.isDarkTheme ? DARK_THEME : LIGHT_THEME,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDidUpdate(() => {
    localStorageService.set(THEME_KEY, !isDarkTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CustomThemeContext.Provider value={{ toggleTheme }}>{children}</CustomThemeContext.Provider>
    </ThemeProvider>
  );
};
