import { ReactNode } from 'react';

export type SnackbarType = 'success' | 'error' | 'warning' | 'info';

export interface ISnackbarArgs {
  type: SnackbarType;
  body: ReactNode;
  duration?: number;
}
