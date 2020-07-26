import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(
  ({ GUTTERS: { MARGIN_1, PADDING_1 }, COLORS: { ERROR_COLOR } }: ITheme) => ({
    root: {
      display: 'flex',
      marginBottom: MARGIN_1,
      '& > *': {
        '&:first-child': {
          '& > span': {
            color: ERROR_COLOR,
            fontSize: '1rem',
          },
        },
      },
      '&.horizontal-align': {
        flexDirection: 'row',
        alignItems: 'baseline',
        '& > *': {
          '&:first-child': {
            textAlign: 'left',
            width: '20%',
            paddingRight: PADDING_1,
          },
          '&:last-child': {
            width: '80%',
          },
        },
      },
      '&.vertical-align': {
        flexDirection: 'column',
        '& > *': {
          '&:first-child': {
            paddingBottom: PADDING_1,
          },
        },
      },
    },
  }),
);
