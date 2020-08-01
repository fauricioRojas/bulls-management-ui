import React from 'react';

import { Row } from '../../../../shared/components/row/row';
import { Switch } from '../../../../shared/components/switch/switch';
import { Typography } from '../../../../shared/components/typography/typography';
import { useCustomTheme } from '../../../../shared/context/custom-theme/custom-theme.context';

export const ThemeToggler = () => {
  const { isDarkTheme, toggleTheme } = useCustomTheme();

  return (
    <Row>
      <Typography variant="label" bold={true}>
        Dark Theme
      </Typography>
      <Switch checked={isDarkTheme} round={true} onChange={toggleTheme} />
    </Row>
  );
};
