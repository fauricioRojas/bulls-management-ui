import React, { useContext, FC } from 'react';

import { Button } from '../../shared/components/button/button';
import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { CustomThemeContext } from '../../shared/context/custom-theme/custom-theme.context';
import { useStyles } from './settings.style';

export const Settings: FC = () => {
  const { toggleTheme } = useContext(CustomThemeContext);
  const { root } = useStyles();

  return (
    <Wrapper className={root} title="Settings">
      <Button variant="secondary" onClick={toggleTheme}>
        Change theme
      </Button>
    </Wrapper>
  );
};
