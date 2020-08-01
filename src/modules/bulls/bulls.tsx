import React, { useCallback, useEffect, FC } from 'react';

import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { useBullLot } from '../../shared/context/bull-lot/bull-lot.context';
import { useDrawer } from '../../shared/context/drawer/drawer.context';
import { useStyles } from './bulls.style';
import { BullLotForm } from './components/bull-lot-form/bull-lot-form';
import { BullLots } from './components/bull-lots/bull-lots';
import { BullsLoading } from './components/bulls-loading/bulls-loading';

export const Bulls: FC = () => {
  const { isLoading, bullLots, getBullLots } = useBullLot();
  const { showDrawer } = useDrawer();
  const { root } = useStyles();

  useEffect(() => {
    getBullLots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showBullLotForm = useCallback(() => {
    showDrawer({
      title: 'New Bull Lot',
      body: <BullLotForm />,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper className={root} title="Bulls" onClickAdd={showBullLotForm}>
      {isLoading ? <BullsLoading /> : <BullLots bullLots={bullLots} />}
    </Wrapper>
  );
};
