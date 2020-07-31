import React, { useCallback, useState, FC } from 'react';

import { bullLotService } from '../../services/bull-lot/bull-lot.service';
import { IBullLot } from '../../types/bull-lot.interface';
import { BullLotContext } from './bull-lot.context';

interface IBullLotState {
  isLoading: boolean;
  wasLoaded: boolean;
  bullLots: IBullLot[];
}

export const BullLotProvider: FC = ({ children }) => {
  const [{ isLoading, wasLoaded, bullLots }, setState] = useState<IBullLotState>({
    isLoading: false,
    wasLoaded: false,
    bullLots: [],
  });

  const getBullLots = async () => {
    if (!wasLoaded) {
      setState(prevState => ({ ...prevState, isLoading: true }));
      const response = await bullLotService.getBullLots();
      setState(prevState => ({
        ...prevState,
        isLoading: false,
        wasLoaded: true,
        bullLots: response,
      }));
    }
  };

  const pushBullLot = useCallback((newBullLot: IBullLot) => {
    setState(prevState => ({
      ...prevState,
      bullLots: prevState.bullLots.concat(newBullLot),
    }));
  }, []);

  return (
    <BullLotContext.Provider value={{ isLoading, bullLots, getBullLots, pushBullLot }}>
      {children}
    </BullLotContext.Provider>
  );
};
