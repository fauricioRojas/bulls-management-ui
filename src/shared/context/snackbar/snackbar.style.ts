import { createUseStyles } from 'react-jss';

import { ITheme } from 'shared/style/theming/theme';

export const useStyles = createUseStyles(
  ({
    COLORS: {
      SUCCESS_COLOR,
      ERROR_COLOR,
      PRIMARY_TEXT_COLOR,
      SNACKBAR_COLOR,
      WARNING_COLOR,
      INFO_COLOR,
    },
    GUTTERS: { MARGIN_1, PADDING_2, MIN_BORDER_RADIUS },
  }: ITheme) => ({
    root: {
      width: '100vw',
      position: 'fixed',
      top: 30,
      zIndex: 2,
      display: 'flex',
      justifyContent: 'center',
      '-webkit-animation': (durationInSeconds: number) =>
        `$fade-in 0.4s, $fade-out 0.5s ${durationInSeconds}s`,
      animation: (durationInSeconds: number) =>
        `$fade-in 0.4s, $fade-out 0.5s ${durationInSeconds}s`,
      '& > .snackbar': {
        backgroundColor: SNACKBAR_COLOR,
        boxShadow:
          '0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05)',
        color: PRIMARY_TEXT_COLOR,
        borderRadius: MIN_BORDER_RADIUS,
        padding: PADDING_2,
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'baseline',
        maxWidth: '80vw',
        '& > i': {
          marginRight: MARGIN_1,
        },
        '&.success-snackbar': {
          '& > i': {
            color: SUCCESS_COLOR,
          },
        },
        '&.error-snackbar': {
          '& > i': {
            color: ERROR_COLOR,
          },
        },
        '&.warning-snackbar': {
          '& > i': {
            color: WARNING_COLOR,
          },
        },
        '&.info-snackbar': {
          '& > i': {
            color: INFO_COLOR,
          },
        },
      },
    },
    '@-webkit-keyframes fade-in': {
      from: {
        top: 0,
        opacity: 0,
      },
      to: {
        top: 30,
        opacity: 1,
      },
    },
    '@keyframes fade-in': {
      from: {
        top: 0,
        opacity: 0,
      },
      to: {
        top: 30,
        opacity: 1,
      },
    },
    '@-webkit-keyframes fade-out': {
      from: {
        top: 30,
        opacity: 1,
      },
      to: {
        top: 0,
        opacity: 0,
      },
    },
    '@keyframes fade-out': {
      from: {
        top: 30,
        opacity: 1,
      },
      to: {
        top: 0,
        opacity: 0,
      },
    },
  }),
);
