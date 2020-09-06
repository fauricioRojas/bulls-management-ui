import { useMemo } from 'react';

import { COGS, DASHBOARD, DOLLAR, SHOPPING_BASKET } from 'shared/constants/icons.constants';
import { useLanguage } from 'shared/contexts/language/language.context';
import { BASE_ROUTES } from 'shared/routes/routes.constants';

export const useNavbarItems = () => {
  const { language, languageTranslation } = useLanguage();
  const navbarItems = useMemo(() => {
    return [
      {
        iconClass: DASHBOARD,
        text: languageTranslation.dashboard,
        to: BASE_ROUTES.DASHBOARD,
      },
      {
        iconClass: SHOPPING_BASKET,
        text: languageTranslation.bulls,
        to: BASE_ROUTES.BULLS,
      },
      {
        iconClass: DOLLAR,
        text: languageTranslation.expenses,
        to: BASE_ROUTES.EXPENSES,
      },
      {
        iconClass: COGS,
        text: languageTranslation.settings,
        to: BASE_ROUTES.SETTINGS,
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return { navbarItems };
};
