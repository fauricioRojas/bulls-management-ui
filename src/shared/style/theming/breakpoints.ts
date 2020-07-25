export interface IBreakpoints {
  SM: string;
  MD: string;
  LG: string;
  XL: string;
}

export const BREAKPOINTS: IBreakpoints = {
  SM: '@media (min-width: 576px)',
  MD: '@media (min-width: 768px)',
  LG: '@media (min-width: 982px)',
  XL: '@media (min-width: 1200px)'
};
