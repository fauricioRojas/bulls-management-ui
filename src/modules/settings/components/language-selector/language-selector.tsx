import React, { useCallback, ChangeEvent } from 'react';

import { Row } from '../../../../shared/components/row/row';
import { Select } from '../../../../shared/components/select/select';
import { Typography } from '../../../../shared/components/typography/typography';
import { useLanguage } from '../../../../shared/context/language/language.context';

export const LanguageSelector = () => {
  const { language, languageOptions, translate, changeLanguage } = useLanguage();

  const handleChangeLanguage = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(event.target.value as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row>
      <Typography variant="label">{translate('language')}</Typography>
      <Select value={language} options={languageOptions} onChange={handleChangeLanguage} />
    </Row>
  );
};
