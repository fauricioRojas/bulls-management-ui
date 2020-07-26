import classNames from 'classnames';
import React, { FC } from 'react';

import Button from '../button/button';
import { Typography } from '../typography/typography';
import { useStyles } from './sliding-wrapper.style';

interface ISlidingWrapperProps {
  title: string;
  isVisible: boolean;
  onCancel: () => void;
}

export const SlidingWrapper: FC<ISlidingWrapperProps> = ({
  title,
  isVisible,
  onCancel,
  children,
}) => {
  const { root } = useStyles();

  return (
    <div className={classNames(root, { 'is-visible': isVisible })}>
      <div className="header">
        <Typography type="label" bold={true}>
          {title}
        </Typography>
        <Button variant="primary-text" size="large" onClick={onCancel}>
          Cancel
        </Button>
      </div>
      {children}
    </div>
  );
};
