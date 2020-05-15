import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { InfoCard } from '../rcomps';
import { Dots } from './Dots';
import { ShowError } from './ShowError';

interface IProps {
  title: string;
  error: string;
  height?: number;
}
export const LoadingOrErrorCard: React.FC<IProps> = ({ title, error, height = 200 }) => {
  return (
    <div
      css={css`
        margin-top: 20px;
      `}
    >
      <InfoCard title={title}>
        {error ? <ShowError error={error} height={height} /> : <Dots />}
      </InfoCard>
    </div>
  );
};
