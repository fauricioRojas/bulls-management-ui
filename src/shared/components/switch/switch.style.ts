import { createUseStyles } from 'react-jss';

import { ITheme } from 'shared/style/theming/theme';

export const useStyles = createUseStyles(
  ({ COLORS: { WHITE_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } }: ITheme) => ({
    root: {
      position: 'relative',
      display: 'inline-block',
      width: 60,
      height: 30,
      '&.round': {
        '& > .slider': {
          borderRadius: 34,
          '&:before': {
            borderRadius: '50%',
          },
        },
      },
      '& > input': {
        opacity: 0,
        width: 0,
        height: 0,
        '&:checked': {
          '& + .slider': {
            backgroundColor: PRIMARY_COLOR,
            '&:before': {
              '-webkit-transform': 'translateX(28px)',
              '-ms-transform': 'translateX(28px)',
              transform: 'translateX(28px)',
            },
          },
        },
        '&:focus': {
          '& + .slider': {
            boxShadow: `0 0 1px ${PRIMARY_COLOR}`,
          },
        },
      },
      '& > .slider': {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: SECONDARY_COLOR,
        '-webkit-transition': '.4s',
        transition: '.4s',
        '&:before': {
          position: 'absolute',
          content: '""',
          top: 3,
          height: 24,
          width: 24,
          left: 4,
          bottom: 4,
          backgroundColor: WHITE_COLOR,
          '-webkit-transition': '.4s',
          transition: '.4s',
        },
      },
    },
  }),
);
