import React, { FC } from 'react';

import { ListItemWrapper } from '../../../../../../shared/components/list-item-wrapper/list-item-wrapper';
import { Typography } from '../../../../../../shared/components/typography/typography';
import { IBullLot } from '../../../../../../shared/types/bull-lot.interface';
import { dateFormatter, moneyFormatter } from '../../../../../../shared/utils/helper';

interface IBullLotItemProps {
  bullLot: IBullLot;
}

export const BullLotItem: FC<IBullLotItemProps> = ({
  bullLot: { amount, purchasePrice, purchaseDate, salePrice, saleDate },
}) => (
  <ListItemWrapper>
    <div>
      <Typography variant="label" bold={true}>
        Bulls amount:
      </Typography>
      <Typography variant="label">{amount}</Typography>
    </div>
    <div>
      <Typography variant="label" bold={true}>
        Purchase price:
      </Typography>
      <Typography variant="label">{moneyFormatter(purchasePrice)}</Typography>
    </div>
    <div>
      <Typography variant="label" bold={true}>
        Purchase date:
      </Typography>
      <Typography variant="label">{dateFormatter(purchaseDate)}</Typography>
    </div>
    {!salePrice && !saleDate && (
      <div>
        <Typography variant="label" italic={true}>
          This bull lot is on farm
        </Typography>
      </div>
    )}
  </ListItemWrapper>
);
