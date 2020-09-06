import { createUseStyles } from 'react-jss';

import { ITheme } from 'shared/style/theming/theme';

export const useStyles = createUseStyles(
  ({
    COLORS: {
      NAVBAR_BACKGROUND_COLOR,
      MODAL_BACKGROUND_COLOR,
      BODY_BACKGROUND_COLOR,
      PRIMARY_TEXT_COLOR,
    },
    GUTTERS: { PADDING_3, PADDING_2, MAX_BORDER_RADIUS },
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
        borderTopLeftRadius: MAX_BORDER_RADIUS,
        borderTopRightRadius: MAX_BORDER_RADIUS,
        position: 'fixed',
        bottom: 0,
        backgroundColor: BODY_BACKGROUND_COLOR,
        width: '100%',
        animation: '$slide-in .4s',
        '& > .modal-header': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: NAVBAR_BACKGROUND_COLOR,
          padding: `${PADDING_3} ${PADDING_2}`,
          borderTopLeftRadius: MAX_BORDER_RADIUS,
          borderTopRightRadius: MAX_BORDER_RADIUS,
        },
        '& > .modal-body': {
          padding: `${PADDING_3} ${PADDING_2}`,
          color: PRIMARY_TEXT_COLOR,
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
