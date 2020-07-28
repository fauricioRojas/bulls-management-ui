import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(
  ({
    GUTTERS: { PADDING_1, PADDING_2, MARGIN_3 },
    COLORS: { NAVBAR_BACKGROUND_COLOR, BODY_BACKGROUND_COLOR },
  }: ITheme) => ({
    root: {
      backgroundColor: BODY_BACKGROUND_COLOR,
      transform: 'translateX(100vw)',
      transition: 'transform .3s ease',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      '& > .header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: NAVBAR_BACKGROUND_COLOR,
        height: 52,
        padding: `${PADDING_1} ${PADDING_2}`,
        marginBottom: MARGIN_3,
      },
      '& > .body': {
        padding: PADDING_2,
      },
      '&.is-visible': {
        transform: 'translateX(0)',
      },
    },
  }),
);
