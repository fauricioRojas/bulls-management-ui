import React, { FC } from 'react';

import { useStyles } from './skeleton.style';

interface ISkeletonProps {
  width: 'quarter' | 'half' | 'three-quarters' | 'full';
  height: 'small' | 'medium' | 'large';
  marginBottom?: 'small' | 'medium' | 'large';
}

export const Skeleton: FC<ISkeletonProps> = ({ width, height, marginBottom = 'small' }) => {
  const { root } = useStyles();

  return (
    <div className={`${root} ${width}-width ${height}-height ${marginBottom}-margin-bottom`} />
  );
};
