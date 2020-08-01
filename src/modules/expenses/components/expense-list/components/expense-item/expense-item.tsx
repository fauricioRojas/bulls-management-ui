import React, { FC } from 'react';

import { ListItemWrapper } from '../../../../../../shared/components/list-item-wrapper/list-item-wrapper';
import { Typography } from '../../../../../../shared/components/typography/typography';
import { IExpense } from '../../../../../../shared/types/expense.interface';
import { dateFormatter, moneyFormatter } from '../../../../../../shared/utils/helper';

interface IExpenseItemProps {
  expense: IExpense;
}

export const ExpenseItem: FC<IExpenseItemProps> = ({
  expense: { description, cost, purchaseDate },
}) => (
  <ListItemWrapper>
    <div>
      <Typography variant="label" bold={true}>
        Description:
      </Typography>
      <Typography variant="label">{description}</Typography>
    </div>
    <div>
      <Typography variant="label" bold={true}>
        Cost:
      </Typography>
      <Typography variant="label">{moneyFormatter(cost)}</Typography>
    </div>
    <div>
      <Typography variant="label" bold={true}>
        Purchase date:
      </Typography>
      <Typography variant="label">{dateFormatter(purchaseDate)}</Typography>
    </div>
  </ListItemWrapper>
);
