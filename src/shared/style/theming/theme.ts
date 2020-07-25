import { BREAKPOINTS, IBreakpoints } from './breakpoints';
import { DARK_COLORS, IColors, LIGHT_COLORS } from './colors';
import { FONT_WEIGHTS, IFontWeights } from './font-weights';
import { GUTTERS, IGutters } from './gutters';

export interface ITheme {
  BREAKPOINTS: IBreakpoints;
  COLORS: IColors;
  FONT_WEIGHTS: IFontWeights;
  GUTTERS: IGutters;
}

export const LIGHT_THEME: ITheme = {
  BREAKPOINTS,
  COLORS: LIGHT_COLORS,
  FONT_WEIGHTS,
  GUTTERS
};

export const DARK_THEME: ITheme = {
  BREAKPOINTS,
  COLORS: DARK_COLORS,
  FONT_WEIGHTS,
  GUTTERS
};
