import { IBullLotCreate } from '../../types/bull-lot-create.interface';
import { IBullLot } from '../../types/bull-lot.interface';
import { uuidv4 } from '../../utils/helper';

interface IBullLotService {
  createBullLot(bullLot: IBullLotCreate): Promise<IBullLot>;
  getBullLots: () => Promise<IBullLot[]>;
}

class BullLotService implements IBullLotService {
  public createBullLot = async (bullLot: IBullLotCreate): Promise<IBullLot> => {
    try {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ ...bullLot, bullLotId: uuidv4(), purchaseDate: Date.now() });
        }, 1000);
      });
    } catch (error) {
      throw error;
    }
  };

  public getBullLots = async (): Promise<IBullLot[]> => {
    try {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            {
              bullLotId: uuidv4(),
              amount: 10,
              purchasePrice: 1000000,
              purchaseDate: 1595645518000,
            },
            {
              bullLotId: uuidv4(),
              amount: 10,
              purchasePrice: 1200000,
              purchaseDate: 1595731918000,
            },
            {
              bullLotId: uuidv4(),
              amount: 10,
              purchasePrice: 1200000,
              purchaseDate: 1595818318000,
            },
            {
              bullLotId: uuidv4(),
              amount: 10,
              purchasePrice: 1200000,
              purchaseDate: 1595904718000,
            },
            {
              bullLotId: uuidv4(),
              amount: 10,
              purchasePrice: 1200000,
              purchaseDate: 1595991118000,
            },
          ]);
        }, 3000);
      });
    } catch (error) {
      throw error;
    }
  };
}

export const bullLotService = new BullLotService();
