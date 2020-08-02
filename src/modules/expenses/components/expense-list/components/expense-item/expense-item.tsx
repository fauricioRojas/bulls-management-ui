import React, { FC } from 'react';

import { ListItem } from '../../../../../../shared/components/list-item/list-item';
import { Typography } from '../../../../../../shared/components/typography/typography';
import { useLanguage } from '../../../../../../shared/context/language/language.context';
import { IExpense } from '../../../../../../shared/types/expense.interface';
import { dateFormatter, moneyFormatter } from '../../../../../../shared/utils/helper';

interface IExpenseItemProps {
  expense: IExpense;
}

export const ExpenseItem: FC<IExpenseItemProps> = ({
  expense: { description, cost, purchaseDate },
}) => {
  const { translate } = useLanguage();

  return (
    <ListItem>
      <div>
        <Typography variant="label" bold={true}>
          {translate('description')}:
        </Typography>
        <Typography variant="label">{description}</Typography>
      </div>
      <div>
        <Typography variant="label" bold={true}>
          {translate('cost')}:
        </Typography>
        <Typography variant="label">{moneyFormatter(cost)}</Typography>
      </div>
      <div>
        <Typography variant="label" bold={true}>
          {translate('purchaseDate')}:
        </Typography>
        <Typography variant="label">{dateFormatter(purchaseDate)}</Typography>
      </div>
    </ListItem>
  );
};
