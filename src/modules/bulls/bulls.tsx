import React, { useState, FC } from 'react';

import { InputSliderWrapper } from '../../shared/components/input-slider-wrapper/input-slider-wrapper';
import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { useStyles } from './bulls.style';
import { BullLotForm } from './components/bull-lot-form/bull-lot-form';

export const Bulls: FC = () => {
  const [isBullLotFormVisible, setIsBullLotFormVisible] = useState(false);
  const { root } = useStyles();

  const toggleIsBullLotFormVisible = () =>
    setIsBullLotFormVisible(prevIsBullLotFormVisible => !prevIsBullLotFormVisible);

  return (
    <Wrapper className={root} title="Bulls" onClickAdd={toggleIsBullLotFormVisible}>
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
