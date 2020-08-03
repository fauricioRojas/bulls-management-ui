import React, { FC } from 'react';

import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { useLanguage } from '../../shared/context/language/language.context';
import { LanguageSelector } from './components/language-selector/language-selector';
import { ThemeToggler } from './components/theme-toggler/theme-toggler';
import { useStyles } from './settings.style';

export const Settings: FC = () => {
  const { languageTranslation } = useLanguage();
  const { root } = useStyles();

  return (
    <Wrapper className={root} title={languageTranslation.settings}>
      <ThemeToggler />
      <LanguageSelector />
    </Wrapper>
  );
};
