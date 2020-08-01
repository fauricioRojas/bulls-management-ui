import React, { useCallback, useState, FC, ReactNode } from 'react';

import { Icon } from '../../components/icon/icon';
import { DEFAULT_SNACKBAR_DURATION, SNACKBAR_ICON_MAP } from './constants/snackbar.contants';
import { ISnackbarArgs, SnackbarType } from './interfaces/snackbar.interface';
import { SnackbarContext } from './snackbar.context';
import { getDurationInSeconds } from './snackbar.helper';
import { useStyles } from './snackbar.style';

interface ISnackbarState {
  isVisible: boolean;
  durationInSeconds: number;
  type: SnackbarType;
  body: ReactNode;
}

export const SnackbarProvider: FC = ({ children }) => {
  const [{ isVisible, durationInSeconds, type, body }, setState] = useState<ISnackbarState>({
    isVisible: false,
    durationInSeconds: getDurationInSeconds(DEFAULT_SNACKBAR_DURATION),
    type: 'success',
    body: null,
  });
  const { root } = useStyles(durationInSeconds);

  const hideSnackbar = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isVisible: false,
      body: null,
    }));
  }, []);

  const showSnackbar = useCallback((args: ISnackbarArgs) => {
    const newDuration = args.duration || DEFAULT_SNACKBAR_DURATION;
    setState({
      isVisible: true,
      durationInSeconds: getDurationInSeconds(newDuration),
      type: args.type,
      body: args.body,
    });
    setTimeout(hideSnackbar, newDuration);
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
