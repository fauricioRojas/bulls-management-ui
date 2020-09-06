import React, { FC } from 'react';

import { Navbar } from 'shared/components/navbar/navbar';
import { AppRouter } from 'shared/routes/router';
import { useStyles } from './app.style';

export const App: FC = () => {
  const { root } = useStyles();

  return (
    <div className={root}>
      <AppRouter />
      <Navbar />
    </div>
  );
};
