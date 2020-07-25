import React, { FC } from 'react';

import { useStyles } from './section-header.style';

interface ISectionHeaderProps {
  title: string;
}

export const SectionHeader: FC<ISectionHeaderProps> = ({ title }) => {
  const { root } = useStyles();

  return <div className={root}>{title}</div>;
};
