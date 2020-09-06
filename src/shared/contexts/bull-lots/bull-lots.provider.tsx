import React, { useCallback, useState, FC } from 'react';

import { bullLotService } from 'shared/services/bull-lot/bull-lot.service';
import { IBullLot } from 'shared/types/bull-lot.interface';
import { BullLotsContext } from './bull-lots.context';

interface IBullLotsState {
  isLoading: boolean;
  wasLoaded: boolean;
  bullLots: IBullLot[];
}

export const BullLotsProvider: FC = ({ children }) => {
  const [{ isLoading, wasLoaded, bullLots }, setState] = useState<IBullLotsState>({
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

  const pushBullLot = useCallback((bullLot: IBullLot) => {
    setState(prevState => ({
      ...prevState,
      bullLots: prevState.bullLots.concat(bullLot),
    }));
  }, []);

  return (
    <BullLotsContext.Provider value={{ isLoading, bullLots, getBullLots, pushBullLot }}>
      {children}
    </BullLotsContext.Provider>
  );
};
