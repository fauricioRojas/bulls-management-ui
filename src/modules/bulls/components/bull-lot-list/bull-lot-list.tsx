import React, { useCallback, FC } from 'react';

import { IBullLot } from '../../../../shared/types/bull-lot.interface';
import { BullLotItem } from './components/bull-lot-item/bull-lot-item';

interface IBullLotListProps {
  bullLots: IBullLot[];
}

export const BullLotList: FC<IBullLotListProps> = ({ bullLots }) => {
  const renderBullLotItem = useCallback(
    (bullLot: IBullLot) => <BullLotItem key={bullLot.bullLotId} bullLot={bullLot} />,
    [],
  );

  return <ul>{bullLots.map(renderBullLotItem)}</ul>;
};
