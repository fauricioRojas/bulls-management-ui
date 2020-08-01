import React, { useCallback, useState, FC, ReactNode } from 'react';

import { Icon } from '../../components/icon/icon';
import { DEFAULT_SNACKBAR_DURATION, SNACKBAR_ICON_MAP } from './constants/snackbar.contants';
import { ISnackbarArgs, SnackbarType } from './interfaces/snackbar.interface';
import { SnackbarContext } from './snackbar.context';
import { useStyles } from './snackbar.style';

interface ISnackbarState {
  isVisible: boolean;
  type: SnackbarType;
  body: ReactNode;
}

export const SnackbarProvider: FC = ({ children }) => {
  const { root } = useStyles();
  const [{ isVisible, type, body }, setState] = useState<ISnackbarState>({
    isVisible: false,
    type: 'success',
    body: null,
  });

  const hideSnackbar = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isVisible: false,
      body: null,
    }));
  }, []);

  const showSnackbar = useCallback((args: ISnackbarArgs) => {
    setState({
      isVisible: true,
      type: args.type,
      body: args.body,
    });
    setTimeout(hideSnackbar, args.duration || DEFAULT_SNACKBAR_DURATION);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {isVisible && (
        <div className={root}>
          <div className={`snackbar ${type}-snackbar`}>
            <Icon iconClass={SNACKBAR_ICON_MAP[type]} />
            {body}
          </div>
        </div>
      )}
    </SnackbarContext.Provider>
  );
};
