import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(
  ({
    GUTTERS: { MARGIN_0, MARGIN_3, MIN_BORDER_RADIUS, PADDING_1, PADDING_2 },
    COLORS: { ERROR_COLOR, INPUT_BACKGROUND_COLOR, SECONDARY_TEXT_COLOR },
  }: ITheme) => ({
    root: {
      marginBottom: MARGIN_3,
      '&.has-error': {
        marginBottom: MARGIN_0,
        '& > input': {
          borderColor: ERROR_COLOR,
        },
        '& > *': {
          '&:last-child': {
            paddingTop: PADDING_1,
            height: 24,
          },
        },
      },
      '& > input': {
        borderRadius: MIN_BORDER_RADIUS,
        height: 36,
        outline: 0,
        width: '100%',
        padding: `${PADDING_1} ${PADDING_2}`,
        fontSize: '1rem',
        border: '1px solid transparent',
        backgroundColor: INPUT_BACKGROUND_COLOR,
        color: SECONDARY_TEXT_COLOR,
      },
    },
  }),
);
