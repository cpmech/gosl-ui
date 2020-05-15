import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { SpinDots } from '../rcomps';
import { colors } from '../styles';

interface IProps {
  height?: number;
  color?: string;
}

export const Dots: React.FC<IProps> = ({ height = 200, color = colors.blue }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        ${height ? `height: ${height}px;` : ''}
      `}
    >
      <SpinDots color={color} size={30} />
    </div>
  );
};
