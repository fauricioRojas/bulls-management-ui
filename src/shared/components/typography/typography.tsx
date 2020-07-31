import classNames from 'classnames';
import React, { useMemo, FC } from 'react';

import { useStyles } from './typography.style';

export interface ITypographyProps {
  variant: 'title' | 'label' | 'caption';
  bold?: boolean;
  italic?: boolean;
}

const defaultTypeMapping: { [key: string]: keyof JSX.IntrinsicElements } = {
  title: 'h2',
  label: 'label',
  caption: 'span',
};

export const Typography: FC<ITypographyProps> = ({ variant, bold, italic, children }) => {
  const { root } = useStyles();

  const Element = useMemo(() => defaultTypeMapping[variant] || 'span', [variant]);

  return <Element className={classNames([root, variant], { italic, bold })}>{children}</Element>;
};
