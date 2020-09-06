import React, { ChangeEvent } from 'react';

import { Row } from 'shared/components/row/row';
import { Select } from 'shared/components/select/select';
import { Typography } from 'shared/components/typography/typography';
import { LanguageType } from 'shared/contexts/language/interfaces/language.interface';
import { useLanguage } from 'shared/contexts/language/language.context';

export const LanguageSelector = () => {
  const { language, languageOptions, languageTranslation, changeLanguage } = useLanguage();

  const handleChangeLanguage = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    changeLanguage(target.value as LanguageType);

  return (
    <Row>
      <Typography variant="label">{languageTranslation.language}</Typography>
      <Select value={language} options={languageOptions} onChange={handleChangeLanguage} />
    </Row>
  );
};
