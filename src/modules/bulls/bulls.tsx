import React, { useState, FC } from 'react';

import { Header } from '../../shared/components/header/header';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { Wrapper } from '../../shared/components/wrapper/wrapper';
import { useStyles } from './bulls.style';
import { BullLotForm } from './components/bull-lot-form/bull-lot-form';

export const Bulls: FC = () => {
  const [isBullLotFormVisible, setIsBullLotFormVisible] = useState(false);
  const { root } = useStyles();

  const toggleIsBullLotFormVisible = () =>
    setIsBullLotFormVisible(prevIsBullLotFormVisible => !prevIsBullLotFormVisible);

  return (
    <Wrapper className={root}>
      <Header title="Bulls" onClickAdd={toggleIsBullLotFormVisible} />
      <SectionHeader title="Bulls" />
      <BullLotForm isVisible={isBullLotFormVisible} onCancel={toggleIsBullLotFormVisible} />
    </Wrapper>
  );
};
