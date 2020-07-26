import classNames from 'classnames';
import React, { useMemo, FC } from 'react';

import { useStyles } from './typography.style';

export interface ITypographyProps {
  type: 'title' | 'label' | 'caption';
  bold?: boolean;
  italic?: boolean;
}

const defaultTypeMapping: { [key: string]: keyof JSX.IntrinsicElements } = {
  title: 'h2',
  label: 'label',
  caption: 'span',
};

export const Typography: FC<ITypographyProps> = ({ type, bold, italic, children }) => {
  const { root } = useStyles();

  const Element = useMemo(() => defaultTypeMapping[type] || 'span', [type]);

  return <Element className={classNames([root, type], { italic, bold })}>{children}</Element>;
};
