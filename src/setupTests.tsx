// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom/extend-expect';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React, { FC } from 'react';
import { ThemeProvider } from 'react-jss';
import { BrowserRouter } from 'react-router-dom';

import { LIGHT_THEME } from './shared/style/theming/theme';

const AllProviders: FC = ({ children }) => (
  <ThemeProvider theme={LIGHT_THEME}>
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
);

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
