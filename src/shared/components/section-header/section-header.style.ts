import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(
  ({
    GUTTERS: { MARGIN_2 },
    FONT_WEIGHTS: { BOLD },
    COLORS: { SECONDARY_TEXT_COLOR },
  }: ITheme) => ({
    root: {
      color: SECONDARY_TEXT_COLOR,
      fontSize: '2rem',
      marginBottom: MARGIN_2,
      fontWeight: BOLD,
    },
  }),
);
