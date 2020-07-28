import { IBullLotCreate } from '../../types/bull-lot-create.interface';
import { IBullLot } from '../../types/bull-lot.interface';
import { uuidv4 } from '../../utils/helper';

interface IBullLotService {
  createBullLot(bullLot: IBullLotCreate): Promise<IBullLot>;
}

class BullLotService implements IBullLotService {
  public createBullLot = async (bullLot: IBullLotCreate): Promise<IBullLot> => {
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
}

export const bullLotService = new BullLotService();
