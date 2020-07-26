import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(({ COLORS: { ERROR_COLOR } }: ITheme) => ({
  root: {
    color: ERROR_COLOR,
    fontSize: '0.9rem',
    animation: 'slide-down 0.4s ease',
  },
  '@keyframes slide-down': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));
