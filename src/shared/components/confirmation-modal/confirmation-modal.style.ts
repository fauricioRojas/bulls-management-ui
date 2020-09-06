import { createUseStyles } from 'react-jss';

import { ITheme } from 'shared/style/theming/theme';

export const useStyles = createUseStyles(
  ({
    COLORS: { NAVBAR_BACKGROUND_COLOR, BORDER_COLOR, MODAL_BACKGROUND_COLOR },
    GUTTERS: { MARGIN_1, PADDING_2, MAX_BORDER_RADIUS },
  }: ITheme) => ({
    root: {
      position: 'fixed',
      zIndex: 2,
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'auto',
      '&.is-hiding': {
        '& > .modal-backdrop': {
          animation: '$fade-out .4s',
        },
        '& > .modal-content': {
          animation: '$slide-out .4s',
        },
      },
      '& > .modal-backdrop': {
        backgroundColor: MODAL_BACKGROUND_COLOR,
        animation: '$fade-in .4s',
        width: '100vw',
        height: '100vh',
      },
      '& > .modal-content': {
        borderRadius: MAX_BORDER_RADIUS,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        animation: '$slide-in .4s',
        padding: PADDING_2,
        '& > .modal-body': {
          borderRadius: MAX_BORDER_RADIUS,
          backgroundColor: NAVBAR_BACKGROUND_COLOR,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderTopLeftRadius: MAX_BORDER_RADIUS,
          borderTopRightRadius: MAX_BORDER_RADIUS,
          '& > *': {
            padding: PADDING_2,
            width: '100%',
            textAlign: 'center',
            '&:not(:last-child)': {
              borderBottom: `1px solid ${BORDER_COLOR}`,
            },
          },
        },
        '& > .modal-footer': {
          borderRadius: MAX_BORDER_RADIUS,
          backgroundColor: NAVBAR_BACKGROUND_COLOR,
          marginTop: MARGIN_1,
          display: 'flex',
          justifyContent: 'center',
          '& > *': {
            padding: PADDING_2,
            width: '100%',
          },
        },
      },
    },
    '@keyframes slide-in': {
      from: {
        bottom: '-300px',
      },
      to: {
        bottom: 0,
      },
    },
    '@keyframes slide-out': {
      from: {
        bottom: 0,
      },
      to: {
        bottom: '-300px',
      },
    },
    '@keyframes fade-in': {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
    '@keyframes fade-out': {
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
    },
  }),
);
