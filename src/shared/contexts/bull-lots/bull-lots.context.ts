import { createContext, useContext } from 'react';

import { IBullLot } from 'shared/types/bull-lot.interface';

interface IBullLotSContext {
  isLoading: boolean;
  bullLots: IBullLot[];
  getBullLots: () => void;
  pushBullLot: (bullLot: IBullLot) => void;
}

export const BullLotsContext = createContext<IBullLotSContext>({
  isLoading: false,
  bullLots: [],
  getBullLots: () => undefined,
  pushBullLot: () => undefined,
});

export const useBullLots = () => useContext(BullLotsContext);
