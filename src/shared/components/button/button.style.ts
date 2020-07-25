import { createUseStyles } from 'react-jss';

import { ITheme } from '../../../shared/style/theming/theme';

export const useStyles = createUseStyles(
  ({
    COLORS: { PRIMARY_COLOR, SECONDARY_COLOR, PRIMARY_TEXT_COLOR, WHITE_COLOR },
    GUTTERS: { MIN_BORDER_RADIUS, PADDING_0, PADDING_3 },
    FONT_WEIGHTS: { BOLD },
  }: ITheme) => ({
    root: {
      borderRadius: MIN_BORDER_RADIUS,
      cursor: 'pointer',
      fontWeight: BOLD,
      height: 32,
      padding: `${PADDING_0} ${PADDING_3}`,
      outline: 0,
      transition: 'all .3s',
      '&.primary': {
        color: WHITE_COLOR,
        border: `1px solid ${PRIMARY_COLOR}`,
        backgroundColor: PRIMARY_COLOR,
      },
      '&.secondary': {
        color: PRIMARY_TEXT_COLOR,
        border: `1px solid ${SECONDARY_COLOR}`,
        backgroundColor: SECONDARY_COLOR,
      },
      '&:disabled': {
        opacity: 0.7,
      },
      ':focus, :active': {
        outline: 0,
      },
    },
  }),
);
