import React, { useCallback, useEffect, useState, FC } from 'react';

import { InputSliderWrapper } from '../../shared/components/input-slider-wrapper/input-slider-wrapper';
import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { useBullLot } from '../../shared/context/bull-lot/bull-lot.context';
import { useStyles } from './bulls.style';
import { BullLotForm } from './components/bull-lot-form/bull-lot-form';
import { BullLots } from './components/bull-lots/bull-lots';
import { BullsLoading } from './components/bulls-loading/bulls-loading';

export const Bulls: FC = () => {
  const [isBullLotFormVisible, setIsBullLotFormVisible] = useState(false);
  const { isLoading, bullLots, getBullLots } = useBullLot();
  const { root } = useStyles();

  useEffect(() => {
    getBullLots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleIsBullLotFormVisible = useCallback(
    () => setIsBullLotFormVisible(prevIsBullLotFormVisible => !prevIsBullLotFormVisible),
    [],
  );

  return (
    <Wrapper className={root} title="Bulls" onClickAdd={toggleIsBullLotFormVisible}>
      {isLoading ? <BullsLoading /> : <BullLots bullLots={bullLots} />}
      <InputSliderWrapper
        title="New Bull Lot"
        isVisible={isBullLotFormVisible}
        onCancel={toggleIsBullLotFormVisible}
      >
        <BullLotForm />
      </InputSliderWrapper>
    </Wrapper>
  );
};
