import { createUseStyles } from 'react-jss';

import { ITheme } from 'shared/style/theming/theme';

export const useStyles = createUseStyles(
  ({
    COLORS: { NAVBAR_BACKGROUND_COLOR, BODY_BACKGROUND_COLOR },
    GUTTERS: { PADDING_3 },
  }: ITheme) => ({
    root: {
      padding: PADDING_3,
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: BODY_BACKGROUND_COLOR,
      transition: 'background-color .3s',
      '&.background': {
        backgroundColor: NAVBAR_BACKGROUND_COLOR,
      },
    },
  }),
);
