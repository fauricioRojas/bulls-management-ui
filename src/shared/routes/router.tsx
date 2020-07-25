import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { authRoutes } from './routes';
import { BASE_ROUTES } from './routes.constants';

export const AppRouter: FC = () => {
  return (
    <Switch>
      {Object.values(authRoutes).map(({ path, component, exact }) => (
        <Route key={path} path={path} component={component} exact={exact} />
      ))}
      <Redirect to={BASE_ROUTES.NOT_FOUND} />
    </Switch>
  );
};
