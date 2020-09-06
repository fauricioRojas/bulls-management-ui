import { createUseStyles } from 'react-jss';

import { ITheme } from 'shared/style/theming/theme';

export const useStyles = createUseStyles(
  ({ GUTTERS: { SPACING_1 }, COLORS: { PRIMARY_COLOR, SECONDARY_TEXT_COLOR } }: ITheme) => ({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: SPACING_1,
      textAlign: 'center',
      textDecoration: 'none',
      color: SECONDARY_TEXT_COLOR,
      transition: 'color .3s ease',
      flex: 1,
      '&.active': {
        color: PRIMARY_COLOR,
      },
      '&:focus': {
        outline: 0,
      },
    },
  }),
);
