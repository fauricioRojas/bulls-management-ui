import classNames from 'classnames';
import React, { ChangeEvent, FC } from 'react';

import { CHEVRON_DOWN } from 'shared/constants/icons.constants';
import { Icon } from '../icon/icon';
import { ISelectOption } from './interfaces/select.interface';
import { useStyles } from './select.style';

interface ISelectProps {
  value: any;
  options: ISelectOption[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  fullWidth?: boolean;
}

export const Select: FC<ISelectProps> = ({ options, fullWidth, ...props }) => {
  const { root } = useStyles();

  return (
    <div className={classNames(root, { 'full-width': fullWidth })}>
      <select {...props}>
        {options.map(({ label, value }) => (
          <option key={label} value={value || label}>
            {label}
          </option>
        ))}
      </select>
      <Icon iconClass={CHEVRON_DOWN} size="small" />
    </div>
  );
};
