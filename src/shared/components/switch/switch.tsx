import classNames from 'classnames';
import React, { ChangeEvent, FC } from 'react';

import { useStyles } from './switch.style';

interface ISwitchProps {
  checked: boolean;
  round?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Switch: FC<ISwitchProps> = ({ checked, round, onChange }) => {
  const { root } = useStyles();

  return (
    <label className={classNames(root, { round })}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider" />
    </label>
  );
};
