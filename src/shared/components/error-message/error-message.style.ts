import { createUseStyles } from 'react-jss';

import { ITheme } from 'shared/style/theming/theme';

export const useStyles = createUseStyles(({ COLORS: { ERROR_COLOR } }: ITheme) => ({
  root: {
    color: ERROR_COLOR,
    fontSize: '0.9rem',
    animation: '$fade-in 0.4s ease',
    '-webkit-animation': '$fade-in 0.4s ease',
  },
  '@keyframes fade-in': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@-webkit-keyframes fade-in': {
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
