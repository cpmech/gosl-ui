import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { colors } from '../styles';

interface IProps {
  error: string;
  height?: number;
}
export const ShowError: React.FC<IProps> = ({ error, height = 200 }) => {
  return (
    <div
      css={css`
        margin-top: 20px;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          ${height ? `height: ${height}px;` : ''}
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <span
            css={css`
              color: ${colors.red};
              font-weight: bold;
            `}
          >
            ERROR
          </span>
          <div
            css={css`
              max-width: 400px;
            `}
          >
            {error}
          </div>
        </div>
      </div>
    </div>
  );
};
