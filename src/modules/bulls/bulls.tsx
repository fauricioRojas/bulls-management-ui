import React, { useCallback, useEffect, FC } from 'react';

import { Wrapper } from 'shared/components/wrapper/wrapper';
import { useBullLots } from 'shared/contexts/bull-lots/bull-lots.context';
import { useDrawer } from 'shared/contexts/drawer/drawer.context';
import { useLanguage } from 'shared/contexts/language/language.context';
import { useStyles } from './bulls.style';
import { BullLotForm } from './components/bull-lot-form/bull-lot-form';
import { BullLotListLoading } from './components/bull-lot-list-loading/bull-lot-list-loading';
import { BullLotList } from './components/bull-lot-list/bull-lot-list';

export const Bulls: FC = () => {
  const { languageTranslation } = useLanguage();
  const { isLoading, bullLots, getBullLots } = useBullLots();
  const { showDrawer } = useDrawer();
  const { root } = useStyles();

  useEffect(() => {
    getBullLots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showBullLotForm = useCallback(() => {
    showDrawer({
      title: languageTranslation.newBullLot,
      body: <BullLotForm />,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper className={root} title={languageTranslation.bulls} onClickAdd={showBullLotForm}>
      {isLoading ? <BullLotListLoading /> : <BullLotList bullLots={bullLots} />}
    </Wrapper>
  );
};
