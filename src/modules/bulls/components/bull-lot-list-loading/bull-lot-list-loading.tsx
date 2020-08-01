import React from 'react';

import { Skeleton } from '../../../../shared/components/skeleton/skeleton';

export const BullLotListLoading = () => (
  <section>
    {Array.from(Array(5).keys()).map(index => (
      <div key={index}>
        <Skeleton width="full" height="small" />
        <Skeleton width="full" height="small" />
        <Skeleton width="full" height="small" />
        <Skeleton width="full" height="small" marginBottom="large" />
      </div>
    ))}
  </section>
);
