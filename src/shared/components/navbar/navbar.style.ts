import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(
  ({ GUTTERS: { PADDING_2, PADDING_3 }, COLORS: { NAVBAR_BACKGROUND_COLOR } }: ITheme) => ({
    root: {
      backgroundColor: NAVBAR_BACKGROUND_COLOR,
      padding: `${PADDING_2} ${PADDING_3}`,
      position: 'fixed',
      display: 'flex',
      bottom: 0,
      width: '100%',
      justifyContent: 'space-between',
      transition: 'background-color .3s',
    },
  }),
);
