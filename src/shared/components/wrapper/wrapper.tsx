import classNames from 'classnames';
import React, { FC } from 'react';

import { useStyles } from './wrapper.style';

interface IWrapperProps {
  className?: string;
}

export const Wrapper: FC<IWrapperProps> = ({ children, className = '' }) => {
  const { root } = useStyles();

  return <div className={classNames(root, { [className]: className })}>{children}</div>;
};
