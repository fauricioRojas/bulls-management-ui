import React, { FC } from 'react';

import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { ThemeToggler } from './components/theme-toggler/theme-toggler';
import { useStyles } from './settings.style';

export const Settings: FC = () => {
  const { root } = useStyles();

  return (
    <Wrapper className={root} title="Settings">
      <ThemeToggler />
    </Wrapper>
  );
};
