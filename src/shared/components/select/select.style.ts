import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(
  ({
    GUTTERS: { MIN_BORDER_RADIUS, PADDING_1, PADDING_2, PADDING_5 },
    COLORS: { INPUT_BACKGROUND_COLOR, SECONDARY_TEXT_COLOR },
  }: ITheme) => ({
    root: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&.full-width': {
        width: '100%',
        '& > select': {
          width: '100%',
        },
      },
      '& > select': {
        borderRadius: MIN_BORDER_RADIUS,
        height: 32,
        outline: 0,
        padding: `${PADDING_1} ${PADDING_5} ${PADDING_1} ${PADDING_2}`,
        fontSize: '1rem',
        border: '1px solid transparent',
        backgroundColor: INPUT_BACKGROUND_COLOR,
        color: SECONDARY_TEXT_COLOR,
        cursor: 'pointer',
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        appearance: 'none',
      },
      '& > i': {
        position: 'absolute',
        right: PADDING_2,
        color: SECONDARY_TEXT_COLOR,
      },
    },
  }),
);
