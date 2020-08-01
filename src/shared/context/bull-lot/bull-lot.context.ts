import { createContext, useContext } from 'react';
import { IBullLot } from '../../types/bull-lot.interface';

interface IBullLotContext {
  isLoading: boolean;
  bullLots: IBullLot[];
  getBullLots: () => void;
  pushBullLot: (bullLot: IBullLot) => void;
}

export const BullLotContext = createContext<IBullLotContext>({
  isLoading: false,
  bullLots: [],
  getBullLots: () => undefined,
  pushBullLot: () => undefined,
});

export const useBullLot = () => useContext(BullLotContext);
