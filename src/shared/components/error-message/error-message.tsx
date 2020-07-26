import React, { FC } from 'react';

import { useStyles } from './error-message.style';

export interface IErrorMessage {
  show?: boolean;
}

export const ErrorMessage: FC<IErrorMessage> = ({
  children = 'Something went wrong. Please try again later.',
  show,
}) => {
  const { root } = useStyles();

  return show ? <div className={root}>{children}</div> : null;
};
