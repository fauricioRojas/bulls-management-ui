import { createUseStyles } from 'react-jss';

import { ITheme } from '../../shared/style/theming/theme';

export const useStyles = createUseStyles(
  ({ COLORS: { BODY_BACKGROUND_COLOR }, GUTTERS: { PADDING_0, MARGIN_0 } }: ITheme) => ({
    root: {
      minHeight: '100vh',
      transition: 'background-color .3s',
      backgroundColor: BODY_BACKGROUND_COLOR,
      paddingBottom: 60,
    },
    '@global': {
      '*': {
        padding: PADDING_0,
        margin: MARGIN_0,
        boxSizing: 'border-box',
      },
      html: {
        fontSize: '16px',
      },
      body: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },
      code: {
        fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      },
    },
  }),
);
