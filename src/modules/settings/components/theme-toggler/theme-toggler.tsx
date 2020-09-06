import React from 'react';

import { Row } from 'shared/components/row/row';
import { Switch } from 'shared/components/switch/switch';
import { Typography } from 'shared/components/typography/typography';
import { useCustomTheme } from 'shared/contexts/custom-theme/custom-theme.context';
import { useLanguage } from 'shared/contexts/language/language.context';

export const ThemeToggler = () => {
  const { languageTranslation } = useLanguage();
  const { isDarkTheme, toggleTheme } = useCustomTheme();

  return (
    <Row>
      <Typography variant="label">{languageTranslation.theme}</Typography>
      <Switch checked={isDarkTheme} round={true} onChange={toggleTheme} />
    </Row>
  );
};
