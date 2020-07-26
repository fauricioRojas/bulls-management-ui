import React, { FC } from 'react';

import { Typography } from '../typography/typography';

interface ISectionHeaderProps {
  title: string;
}

export const SectionHeader: FC<ISectionHeaderProps> = ({ title }) => (
  <Typography type="title" bold={true}>
    {title}
  </Typography>
);
