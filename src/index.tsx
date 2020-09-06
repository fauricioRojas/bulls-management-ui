import 'font-awesome/css/font-awesome.min.css';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'modules/app/app';
import * as serviceWorker from 'serviceWorker';
import { BullLotsProvider } from 'shared/contexts/bull-lots/bull-lots.provider';
import { CustomThemeProvider } from 'shared/contexts/custom-theme/custom-theme.provider';
import { DrawerProvider } from 'shared/contexts/drawer/drawer.provider';
import { ExpensesProvider } from 'shared/contexts/expenses/expenses.provider';
import { LanguageProvider } from 'shared/contexts/language/language.provider';
import { ModalProvider } from 'shared/contexts/modal/modal.provider';
import { SnackbarProvider } from 'shared/contexts/snackbar/snackbar.provider';

ReactDOM.render(
  <StrictMode>
    <CustomThemeProvider>
      <BrowserRouter>
        <BullLotsProvider>
          <ExpensesProvider>
            <SnackbarProvider>
              <LanguageProvider>
                <ModalProvider>
                  <DrawerProvider>
                    <App />
                  </DrawerProvider>
                </ModalProvider>
              </LanguageProvider>
            </SnackbarProvider>
          </ExpensesProvider>
        </BullLotsProvider>
      </BrowserRouter>
    </CustomThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
