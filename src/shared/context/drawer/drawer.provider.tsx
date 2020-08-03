import classNames from 'classnames';
import React, { useCallback, useState, FC } from 'react';

import { Button } from '../../components/button/button';
import { Typography } from '../../components/typography/typography';
import { useLanguage } from '../language/language.context';
import { DrawerContext } from './drawer.context';
import { useStyles } from './drawer.style';
import { IDrawerArgs } from './interfaces/drawer.interface';

interface IDrawerState extends IDrawerArgs {
  isVisible: boolean;
}

export const DEFAULT_DRAWER_STATE: IDrawerState = {
  isVisible: false,
  title: '',
  body: null,
};

export const DrawerProvider: FC = ({ children }) => {
  const { languageTranslation } = useLanguage();
  const { root } = useStyles();
  const [{ isVisible, title, body }, setState] = useState<IDrawerState>(DEFAULT_DRAWER_STATE);

  const resetState = useCallback(() => setState(DEFAULT_DRAWER_STATE), []);

  const hideDrawer = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isVisible: false,
    }));
    setTimeout(resetState, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showDrawer = useCallback((args: IDrawerArgs) => {
    setState({
      isVisible: true,
      title: args.title,
      body: args.body,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DrawerContext.Provider value={{ showDrawer, hideDrawer }}>
      {children}
      <div className={classNames(root, { 'is-visible': isVisible })}>
        {body && title && (
          <>
            <div className="header">
              <Typography variant="label" bold={true}>
                {title}
              </Typography>
              <Button variant="primary-text" onClick={hideDrawer}>
                {languageTranslation.cancel}
              </Button>
            </div>
            <div className="body">{body}</div>
          </>
        )}
      </div>
    </DrawerContext.Provider>
  );
};
