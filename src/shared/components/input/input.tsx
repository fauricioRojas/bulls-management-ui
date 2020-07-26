import classNames from 'classnames';
import React, { ChangeEvent, FC } from 'react';

import { ErrorMessage } from '../error-message/error-message';
import { useStyles } from './input.style';

export interface IInputProps {
  value: any;
  type: 'text';
  inputMode?: 'numeric';
  id?: string;
  name?: string;
  placeholder?: string;
  touched?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInputProps> = ({ touched, errorMessage, ...props }) => {
  const { root } = useStyles();
  const hasError = !!(touched && errorMessage);

  return (
    <div className={classNames(root, { 'has-error': hasError })}>
      <input {...props} />
      <ErrorMessage show={hasError}>{errorMessage}</ErrorMessage>
    </div>
  );
};
