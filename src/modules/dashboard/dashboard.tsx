import React, { FC } from 'react';

import { Wrapper } from 'shared/components/wrapper/wrapper';
import { useLanguage } from 'shared/context/language/language.context';
import { useStyles } from './dashboard.style';

export const Dashboard: FC = () => {
  const { languageTranslation } = useLanguage();
  const { root } = useStyles();

  return <Wrapper className={root} title={languageTranslation.dashboard} />;
};
