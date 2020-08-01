import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(
  ({
    GUTTERS: { MARGIN_1, PADDING_0, PADDING_1, PADDING_3 },
    COLORS: { BORDER_COLOR },
  }: ITheme) => ({
    root: {
      padding: `${PADDING_3} ${PADDING_0}`,
      '&.single-line': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      '&:not(.single-line)': {
        '& > *': {
          '& > *': {
            '&:first-child': {
              marginRight: MARGIN_1,
            },
          },
          '&:not(:last-child)': {
            paddingBottom: PADDING_1,
          },
        },
      },
      '&:first-of-type': {
        paddingTop: PADDING_0,
      },
      '&:last-of-type': {
        paddingBottom: PADDING_0,
      },
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${BORDER_COLOR}`,
      },
    },
  }),
);
