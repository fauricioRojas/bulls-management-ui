import { createContext, useContext } from 'react';
import { IBullLot } from '../../types/bull-lot.interface';

export interface IBullLotContext {
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

export const useBullLotContext = () => useContext(BullLotContext);
