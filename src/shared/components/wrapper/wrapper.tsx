import classNames from 'classnames';
import React, { FC } from 'react';

import { Header } from '../header/header';
import { SectionHeader } from '../section-header/section-header';
import { useStyles } from './wrapper.style';

interface IWrapperProps {
  title: string;
  onClickAdd?: () => void;
  className?: string;
}

export const Wrapper: FC<IWrapperProps> = ({ title, onClickAdd, children, className = '' }) => {
  const { root } = useStyles();

  return (
    <div className={classNames(root, { [className]: className })}>
      <Header title={title} onClickAdd={onClickAdd} />
      <main>
        <SectionHeader title={title} />
        {children}
      </main>
    </div>
  );
};
