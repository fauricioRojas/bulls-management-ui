export interface IBullLot {
  bullLotId: string;
  amount: number;
  purchasePrice: number;
  purchaseDate: number;
  salePrice?: number;
  saleDate?: number;
}
