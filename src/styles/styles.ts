import { css } from '@emotion/core';

export const maxContentWidth = 1124;
export const columnMinWidth = 300;
export const columnMaxWidth = 400;

export const styles = {
  centered: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  content: css`
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 960px;
  `,

  paper: css`
    background-color: #ffffff;
    border-radius: 8px;
    -webkit-box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
  `,

  onRow: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  onRowEnd: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  `,

  grid: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `,

  gridItem: css`
    max-width: 120px;
  `,

  column: css`
    min-width: ${columnMinWidth}px;
    max-width: ${columnMaxWidth}px;
    padding-left: 10px;
    padding-right: 10px;
  `,

  title: css`
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    color: #484848;
  `,

  section: css`
    margin-top: 10px;
    margin-bottom: 30px;
    color: #484848;
    font-size: 18px;
    font-weight: bold;
  `,

  header: css`
    color: #484848;
  `,
};
