import { createUseStyles } from 'react-jss';

import { ITheme } from 'shared/style/theming/theme';

export const useStyles = createUseStyles((theme: ITheme) => ({
  root: {
    listStyleType: 'none',
  },
}));
