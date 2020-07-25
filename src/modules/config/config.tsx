import React, { useContext, FC } from 'react';

import Button from '../../shared/components/button/button';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { CustomThemeContext } from '../../shared/context/custom-theme/custom-theme.context';
import { useStyles } from './config.style';

export const Config: FC = () => {
  const { toggleTheme } = useContext(CustomThemeContext);
  const { root } = useStyles();

  return (
    <div className={root}>
      <SectionHeader title="Config" />
      <Button type="secondary" onClick={toggleTheme}>
        Change theme
      </Button>
    </div>
  );
};
