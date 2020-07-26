import { BULLS, DASHBOARD, EXPENSES, SETTINGS } from '../../../../constants/icons.constants';
import { BASE_ROUTES } from '../../../../routes/routes.constants';
import { INavbarItem } from '../navbar-item/interfaces/navbar-item.interface';

export const NAVBAR_ITEMS: INavbarItem[] = [
  {
    iconClass: DASHBOARD,
    text: 'Dashboard',
    to: BASE_ROUTES.DASHBOARD,
  },
  {
    iconClass: BULLS,
    text: 'Bulls',
    to: BASE_ROUTES.BULLS,
  },
  {
    iconClass: EXPENSES,
    text: 'Expenses',
    to: BASE_ROUTES.EXPENSES,
  },
  {
    iconClass: SETTINGS,
    text: 'Settings',
    to: BASE_ROUTES.SETTINGS,
  },
];
