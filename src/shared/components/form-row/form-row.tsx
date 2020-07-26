import React, { FC } from 'react';

import { Typography } from '../typography/typography';
import { useStyles } from './form-row.style';

export interface IFormRowProps {
  label: string;
  required?: boolean;
  align?: 'vertical' | 'horizontal';
}

export const FormRow: FC<IFormRowProps> = ({ label, required, children, align = 'horizontal' }) => {
  const { root } = useStyles();

  return (
    <section className={`${root} ${align}-align`}>
      <Typography type="label" bold={true}>
        {required && <span>*&nbsp;</span>}
        {label}
      </Typography>
      <section>{children}</section>
    </section>
  );
};
