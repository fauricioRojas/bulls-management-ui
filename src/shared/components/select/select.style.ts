import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(
  ({
    GUTTERS: { MIN_BORDER_RADIUS, PADDING_1, PADDING_2 },
    COLORS: { INPUT_BACKGROUND_COLOR, SECONDARY_TEXT_COLOR },
  }: ITheme) => ({
    root: {
      borderRadius: MIN_BORDER_RADIUS,
      height: 30,
      outline: 0,
      padding: `${PADDING_1} ${PADDING_2}`,
      fontSize: '1rem',
      border: '1px solid transparent',
      backgroundColor: INPUT_BACKGROUND_COLOR,
      color: SECONDARY_TEXT_COLOR,
      cursor: 'pointer',
      '&.full-width': {
        width: '100%',
      },
    },
  }),
);
