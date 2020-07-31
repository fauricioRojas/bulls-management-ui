import { COGS, DASHBOARD, DOLLAR, SHOPPING_BASKET } from '../../../../constants/icons.constants';
import { BASE_ROUTES } from '../../../../routes/routes.constants';
import { INavbarItem } from '../navbar-item/interfaces/navbar-item.interface';

export const NAVBAR_ITEMS: INavbarItem[] = [
  {
    iconClass: DASHBOARD,
    text: 'Dashboard',
    to: BASE_ROUTES.DASHBOARD,
  },
  {
    iconClass: SHOPPING_BASKET,
    text: 'Bulls',
    to: BASE_ROUTES.BULLS,
  },
  {
    iconClass: DOLLAR,
    text: 'Expenses',
    to: BASE_ROUTES.EXPENSES,
  },
  {
    iconClass: COGS,
    text: 'Settings',
    to: BASE_ROUTES.SETTINGS,
  },
];
