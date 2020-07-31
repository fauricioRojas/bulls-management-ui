import {
  CHECK_CIRCLE,
  EXCLAMATION_CIRCLE,
  INFO_CIRCLE,
  TIMES_CIRCLE,
} from '../../../constants/icons.constants';
import { SnackbarType } from '../interfaces/snackbar.interface';

export const DEFAULT_SNACKBAR_DURATION = 3000;

export const SNACKBAR_ICON_MAP: { [K in SnackbarType]: string } = {
  success: CHECK_CIRCLE,
  error: TIMES_CIRCLE,
  warning: EXCLAMATION_CIRCLE,
  info: INFO_CIRCLE,
};
