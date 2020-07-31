import React, { useCallback, FC } from 'react';
import { IBullLot } from '../../../../shared/types/bull-lot.interface';

import { BullLotItem } from './components/bull-lot-item/bull-lot-item';

interface IBullLotsProps {
  bullLots: IBullLot[];
}

export const BullLots: FC<IBullLotsProps> = ({ bullLots }) => {
  const renderBullLot = useCallback(
    (bullLot: IBullLot) => <BullLotItem key={bullLot.bullLotId} bullLot={bullLot} />,
    [],
  );

  return <ul>{bullLots.map(renderBullLot)}</ul>;
};
