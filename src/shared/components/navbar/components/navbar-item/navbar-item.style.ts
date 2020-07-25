import { createUseStyles } from 'react-jss';

import { ITheme } from '../../../../style/theming/theme';

export const useStyles = createUseStyles(
  ({
    GUTTERS: { SPACING_1 },
    FONT_WEIGHTS: { BOLD },
    COLORS: { PRIMARY_COLOR, SECONDARY_TEXT_COLOR },
  }: ITheme) => ({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: SPACING_1,
      textAlign: 'center',
      textDecoration: 'none',
      color: SECONDARY_TEXT_COLOR,
      transition: 'color .3s ease',
      '& > i': {
        fontSize: '1.4rem',
      },
      '& > label': {
        fontSize: '0.7rem',
        fontWeight: BOLD,
      },
      '&.active': {
        color: PRIMARY_COLOR,
      },
      '&:focus': {
        outline: 0,
      },
    },
  }),
);
