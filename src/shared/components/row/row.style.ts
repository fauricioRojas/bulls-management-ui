import { createUseStyles } from 'react-jss';
import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(
  ({ COLORS: { BORDER_COLOR }, GUTTERS: { PADDING_0, PADDING_3 } }: ITheme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `${PADDING_3} ${PADDING_0}`,
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
