import { ComponentType } from 'react';

import { Bulls } from 'modules/bulls/bulls';
import { Dashboard } from 'modules/dashboard/dashboard';
import { Expenses } from 'modules/expenses/expenses';
import { Settings } from 'modules/settings/settings';
import { BASE_ROUTES } from './routes.constants';

export interface IRoute {
  path: string;
  component: ComponentType<any>;
  exact?: boolean;
}

export interface IAppRoutes {
  [name: string]: IRoute;
}

export const authRoutes: IAppRoutes = {
  dashboard: {
    path: BASE_ROUTES.DASHBOARD,
    component: Dashboard,
    exact: true,
  },
  bulls: {
    path: BASE_ROUTES.BULLS,
    component: Bulls,
    exact: true,
  },
  settings: {
    path: BASE_ROUTES.SETTINGS,
    component: Settings,
    exact: true,
  },
  expenses: {
    path: BASE_ROUTES.EXPENSES,
    component: Expenses,
    exact: true,
  },
};
