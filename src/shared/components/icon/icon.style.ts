import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(
  ({ FONT_WEIGHTS: { BOLD }, COLORS: { PRIMARY_COLOR, SECONDARY_COLOR } }: ITheme) => ({
    root: {
      '&.small-size': {
        fontSize: '0.7rem',
      },
      '&.default-size': {
        fontSize: '1rem',
      },
      '&.large-size': {
        fontSize: '1.4rem',
      },
      '&.bold': {
        fontWeight: BOLD,
      },
      '&.primary': {
        color: PRIMARY_COLOR,
      },
      '&.secondary': {
        color: SECONDARY_COLOR,
      },
    },
  }),
);
