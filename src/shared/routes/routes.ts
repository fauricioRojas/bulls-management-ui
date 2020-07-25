import { ComponentType } from 'react';

import { Config } from '../../modules/config/config';
import { Dashboard } from '../../modules/dashboard/dashboard';
import { Expenses } from '../../modules/expenses/expenses';
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
  config: {
    path: BASE_ROUTES.CONFIG,
    component: Config,
    exact: true,
  },
  expenses: {
    path: BASE_ROUTES.EXPENSES,
    component: Expenses,
    exact: true,
  },
};
