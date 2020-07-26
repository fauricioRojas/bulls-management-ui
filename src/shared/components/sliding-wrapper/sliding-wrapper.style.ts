import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(
  ({
    GUTTERS: { PADDING_1, PADDING_2, MARGIN_3 },
    COLORS: { NAVBAR_BACKGROUND_COLOR, BODY_BACKGROUND_COLOR },
  }: ITheme) => ({
    root: {
      backgroundColor: BODY_BACKGROUND_COLOR,
      transform: 'translate(100vw, -93px) rotateY(90deg)',
      transition: 'transform .4s ease',
      zIndex: 10,
      '& > .header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: NAVBAR_BACKGROUND_COLOR,
        marginLeft: '-10px',
        marginTop: '-11px',
        width: '100vw',
        padding: `${PADDING_1} ${PADDING_2}`,
        marginBottom: MARGIN_3,
      },
      '&.is-visible': {
        transform: 'translate(0, -93px)',
      },
    },
  }),
);
