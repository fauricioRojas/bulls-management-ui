import React, { FC } from 'react';

import { useStyles } from './button.style';

export interface IButtonProps {
  type: 'primary' | 'secondary';
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<IButtonProps> = ({ type, children, onClick, disabled }) => {
  const { root } = useStyles();

  return (
    <button className={`${root} ${type}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
