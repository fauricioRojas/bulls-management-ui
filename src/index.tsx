import 'font-awesome/css/font-awesome.min.css';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './modules/app/app';
import * as serviceWorker from './serviceWorker';
import { BullLotProvider } from './shared/context/bull-lot/bull-lot.provider';
import { CustomThemeProvider } from './shared/context/custom-theme/custom-theme.provider';
import { DrawerProvider } from './shared/context/drawer/drawer.provider';
import { ExpenseProvider } from './shared/context/expense/expense.provider';
import { SnackbarProvider } from './shared/context/snackbar/snackbar.provider';

ReactDOM.render(
  <StrictMode>
    <CustomThemeProvider>
      <BrowserRouter>
        <BullLotProvider>
          <ExpenseProvider>
            <SnackbarProvider>
              <DrawerProvider>
                <App />
              </DrawerProvider>
            </SnackbarProvider>
          </ExpenseProvider>
        </BullLotProvider>
      </BrowserRouter>
    </CustomThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
