import classNames from 'classnames';
import React, { FC } from 'react';

import { Button } from '../button/button';
import { Typography } from '../typography/typography';
import { useStyles } from './input-slider-wrapper.style';

interface IInputSliderWrapperProps {
  title: string;
  isVisible: boolean;
  onCancel: () => void;
}

export const InputSliderWrapper: FC<IInputSliderWrapperProps> = ({
  title,
  isVisible,
  onCancel,
  children,
}) => {
  const { root } = useStyles();

  return (
    <div className={classNames(root, { 'is-visible': isVisible })}>
      <div className="header">
        <Typography variant="label" bold={true}>
          {title}
        </Typography>
        <Button variant="primary-text" onClick={onCancel}>
          Cancel
        </Button>
      </div>
      <div className="body">{isVisible && children}</div>
    </div>
  );
};
