import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(
  ({
    GUTTERS: { MARGIN_3 },
    FONT_WEIGHTS: { BOLD },
    COLORS: { PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR },
  }: ITheme) => ({
    root: {
      '&.title': {
        display: 'block',
        fontSize: '2rem',
        color: SECONDARY_TEXT_COLOR,
        marginBottom: MARGIN_3,
      },
      '&.label': {
        fontSize: '1rem',
        color: PRIMARY_TEXT_COLOR,
      },
      '&.caption': {
        fontSize: '0.7rem',
        color: PRIMARY_TEXT_COLOR,
      },
      '&.bold': {
        fontWeight: BOLD,
      },
      '&.italic': {
        fontStyle: 'italic',
      },
    },
  }),
);
