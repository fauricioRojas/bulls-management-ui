import { CONFIG, DASHBOARD, EXPENSES } from '../../../../constants/icons.constants';
import { BASE_ROUTES } from '../../../../routes/routes.constants';
import { INavbarItem } from '../navbar-item/interfaces/navbar-item.interface';

export const NAVBAR_ITEMS: INavbarItem[] = [
  {
    iconClass: DASHBOARD,
    text: 'Dashboard',
    to: BASE_ROUTES.DASHBOARD,
  },
  {
    iconClass: EXPENSES,
    text: 'Expenses',
    to: BASE_ROUTES.EXPENSES,
  },
  {
    iconClass: CONFIG,
    text: 'Config',
    to: BASE_ROUTES.CONFIG,
  },
];
