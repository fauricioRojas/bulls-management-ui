import classNames from 'classnames';
import React, { FC } from 'react';

import { useStyles } from './icon.style';

interface IIconProps {
  iconClass: string;
  bold?: boolean;
  size?: 'small' | 'large' | 'default';
  type?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Icon: FC<IIconProps> = ({ iconClass, bold, onClick, type = '', size = 'default' }) => {
  const { root } = useStyles();

  return (
    <i
      className={classNames([root, iconClass, `${size}-size`], { bold, [type]: type })}
      onClick={onClick}
    />
  );
};
