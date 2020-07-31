import classNames from 'classnames';
import React, { useCallback, useEffect, useState, FC } from 'react';

import { PLUS } from '../../constants/icons.constants';
import { Icon } from '../icon/icon';
import { Typography } from '../typography/typography';
import { useStyles } from './header.style';

const SCROLL_Y = 40;

interface IHeaderProps {
  title: string;
  onClickAdd?: () => void;
}

export const Header: FC<IHeaderProps> = ({ title, onClickAdd }) => {
  const { root } = useStyles();
  const [showTitle, setShowTitle] = useState(window.scrollY >= SCROLL_Y);

  const handleScroll = useCallback(() => setShowTitle(window.scrollY >= SCROLL_Y), []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className={classNames(root, { background: showTitle })}>
      <div />
      {showTitle && (
        <div>
          <Typography variant="label" bold={true}>
            {title}
          </Typography>
        </div>
      )}
      <div>
        {onClickAdd && <Icon iconClass={PLUS} type="primary" size="large" onClick={onClickAdd} />}
      </div>
    </header>
  );
};
