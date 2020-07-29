import { createUseStyles } from 'react-jss';

import { ITheme } from '../../shared/style/theming/theme';

export const useStyles = createUseStyles(
  ({
    COLORS: { BODY_BACKGROUND_COLOR, PRIMARY_TEXT_COLOR },
    GUTTERS: { PADDING_0, PADDING_12, MARGIN_0 },
  }: ITheme) => ({
    root: {
      minHeight: '100vh',
      transition: 'background-color .3s',
      backgroundColor: BODY_BACKGROUND_COLOR,
      color: PRIMARY_TEXT_COLOR,
      paddingTop: 52,
      paddingBottom: PADDING_12,
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
