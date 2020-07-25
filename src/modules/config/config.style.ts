import { createUseStyles } from 'react-jss';

import { ITheme } from '../../shared/style/theming/theme';

export const useStyles = createUseStyles(({ GUTTERS: { PADDING_2 } }: ITheme) => ({
  root: {
    padding: PADDING_2,
  },
}));
