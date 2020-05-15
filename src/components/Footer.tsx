import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { colors } from '../styles';

interface IProps {
  maxWidth?: number;
}

export const Footer: React.FC<IProps> = ({ maxWidth }) => {
  return (
    <div
      css={css`
        min-height: 200px;
        color: ${colors.blue};
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        ${maxWidth ? `max-width: ${maxWidth}px; margin: auto;` : ''}
      `}
    >
      GOSL. Go Scientific Library
    </div>
  );
};
