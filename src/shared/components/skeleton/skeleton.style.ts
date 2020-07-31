import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles(
  ({
    GUTTERS: { MARGIN_1, MARGIN_2, MARGIN_3 },
    COLORS: { SKELETON_COLOR, SECONDARY_COLOR },
  }: ITheme) => ({
    root: {
      background: `linear-gradient(90deg, ${SECONDARY_COLOR} 25%, ${SKELETON_COLOR} 37%, ${SECONDARY_COLOR} 63%)`,
      backgroundSize: '400% 100%',
      animation: '$skeleton-loading 1.4s ease infinite',
      '&.quarter-width': {
        width: '25%',
      },
      '&.half-width': {
        width: '50%',
      },
      '&.three-quarters-width': {
        width: '75%',
      },
      '&.full-width': {
        width: '100%',
      },
      '&.small-height': {
        height: 16,
      },
      '&.medium-height': {
        height: 24,
      },
      '&.large-height': {
        height: 32,
      },
      '&.small-margin-bottom': {
        marginBottom: MARGIN_1,
      },
      '&.medium-margin-bottom': {
        marginBottom: MARGIN_2,
      },
      '&.large-margin-bottom': {
        marginBottom: MARGIN_3,
      },
    },
    '@keyframes skeleton-loading': {
      '0%': {
        backgroundPosition: '100% 50%',
      },
      '100%': {
        backgroundPosition: '0% 50%',
      },
    },
    '@-webkit-keyframes skeleton-loading': {
      '0%': {
        backgroundPosition: '100% 50%',
      },
      '100%': {
        backgroundPosition: '0% 50%',
      },
    },
  }),
);
