import { useMemo } from 'react';

import { COGS, DASHBOARD, DOLLAR, SHOPPING_BASKET } from '../../../constants/icons.constants';
import { useLanguage } from '../../../context/language/language.context';
import { BASE_ROUTES } from '../../../routes/routes.constants';

export const useNavbarItems = () => {
  const { language, translate } = useLanguage();
  const navbarItems = useMemo(() => {
    return [
      {
        iconClass: DASHBOARD,
        text: translate('dashboard'),
        to: BASE_ROUTES.DASHBOARD,
      },
      {
        iconClass: SHOPPING_BASKET,
        text: translate('bulls'),
        to: BASE_ROUTES.BULLS,
      },
      {
        iconClass: DOLLAR,
        text: translate('expenses'),
        to: BASE_ROUTES.EXPENSES,
      },
      {
        iconClass: COGS,
        text: translate('settings'),
        to: BASE_ROUTES.SETTINGS,
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return { navbarItems };
};
