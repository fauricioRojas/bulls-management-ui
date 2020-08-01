import { createUseStyles } from 'react-jss';

import { ITheme } from '../../style/theming/theme';

export const useStyles = createUseStyles((theme: ITheme) => ({
  root: {
    listStyleType: 'none',
  },
}));
