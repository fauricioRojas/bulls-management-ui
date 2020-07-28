import classNames from 'classnames';
import React, { FC } from 'react';

import { useStyles } from './button.style';

export interface IButtonProps {
  variant: 'primary' | 'secondary' | 'primary-text';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = ({
  variant,
  children,
  onClick,
  type,
  size = '',
  fullWidth,
  disabled,
}) => {
  const { root } = useStyles();

  return (
    <button
      type={type}
      className={classNames([root, variant], { 'full-width': fullWidth, [size]: size })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
