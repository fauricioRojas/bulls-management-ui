import { IBullLot } from '../../../../../shared/types/bull-lot.interface';
import { uuidv4 } from '../../../../../shared/utils/helper';
import { IBullLotForm } from './bull-lot-form.interface';

export const createBullLot = async (bullLot: IBullLotForm): Promise<IBullLot> => {
  try {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ ...bullLot, bullLotId: uuidv4(), purchaseDate: Date.now() });
      }, 3000);
    });
  } catch (error) {
    throw error;
  }
};
