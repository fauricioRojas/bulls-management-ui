import React, { FC } from 'react';

import { ListItem } from 'shared/components/list-item/list-item';
import { Typography } from 'shared/components/typography/typography';
import { useLanguage } from 'shared/context/language/language.context';
import { IBullLot } from 'shared/types/bull-lot.interface';
import { dateFormatter, moneyFormatter } from 'shared/utils/helper';

interface IBullLotItemProps {
  bullLot: IBullLot;
}

export const BullLotItem: FC<IBullLotItemProps> = ({
  bullLot: { amount, purchasePrice, purchaseDate, salePrice, saleDate },
}) => {
  const { languageTranslation } = useLanguage();

  return (
    <ListItem>
      <div>
        <Typography variant="label" bold={true}>
          {languageTranslation.bullsAmount}:
        </Typography>
        <Typography variant="label">{amount}</Typography>
      </div>
      <div>
        <Typography variant="label" bold={true}>
          {languageTranslation.purchasePrice}:
        </Typography>
        <Typography variant="label">{moneyFormatter(purchasePrice)}</Typography>
      </div>
      <div>
        <Typography variant="label" bold={true}>
          {languageTranslation.purchaseDate}:
        </Typography>
        <Typography variant="label">{dateFormatter(purchaseDate)}</Typography>
      </div>
      {!salePrice && !saleDate && (
        <div>
          <Typography variant="label" italic={true}>
            {languageTranslation.bullLotOnFarm}
          </Typography>
        </div>
      )}
    </ListItem>
  );
};
