import React, { useContext, FC } from 'react';

import Button from '../../shared/components/button/button';
import { Header } from '../../shared/components/header/header';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { CustomThemeContext } from '../../shared/context/custom-theme/custom-theme.context';
import { useStyles } from './settings.style';

export const Settings: FC = () => {
  const { toggleTheme } = useContext(CustomThemeContext);
  const { root } = useStyles();

  return (
    <Wrapper className={root}>
      <Header title="Settings" />
      <SectionHeader title="Settings" />
      <Button variant="secondary" onClick={toggleTheme}>
        Change theme
      </Button>
    </Wrapper>
  );
};
