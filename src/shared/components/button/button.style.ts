import { createUseStyles } from 'react-jss';

import { ITheme } from '../../../shared/style/theming/theme';

export const useStyles = createUseStyles(
  ({
    COLORS: { PRIMARY_COLOR, SECONDARY_COLOR, PRIMARY_TEXT_COLOR, WHITE_COLOR, ERROR_COLOR },
    GUTTERS: { MIN_BORDER_RADIUS, PADDING_0, PADDING_3, LETTER_SPACING },
    FONT_WEIGHTS: { BOLD, REGULAR },
  }: ITheme) => ({
    root: {
      borderRadius: MIN_BORDER_RADIUS,
      cursor: 'pointer',
      fontWeight: BOLD,
      height: 32,
      padding: `${PADDING_0} ${PADDING_3}`,
      outline: 0,
      transition: 'all .3s',
      fontSize: '0.875rem',
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
      '&.primary-text, &.error-text': {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        padding: PADDING_0,
        fontWeight: REGULAR,
        letterSpacing: LETTER_SPACING,
        fontSize: '1rem',
        height: 'auto',
      },
      '&.primary-text': {
        color: PRIMARY_COLOR,
      },
      '&.error-text': {
        color: ERROR_COLOR,
      },
      '&.full-width': {
        width: '100%',
      },
      '&.large': {
        height: 40,
        fontSize: '1rem',
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
