// eslint-disable-next-line
import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { navigate } from '@reach/router';
import { IconHome, IconBars } from '@cpmech/react-icons';
import { IMenuEntry } from './rcomps';
import { colors } from './styles';

const mainButtonHeight = 30;

export const menuTopEntries: IMenuEntry[] = [
  {
    comp: <div>GOSL</div>,
  },
  {
    comp: <div>PLOT</div>,
  },
];

export const menuTopEntriesNarrow = (openMenu: () => void): IMenuEntry[] => [
  {
    comp: (
      <div
        onClick={openMenu}
        css={css`
          cursor: pointer;
          color: ${colors.blue};
          :hover {
            color: ${colors.blue};
          }
        `}
      >
        <IconBars size={30} />
      </div>
    ),
  },
  {
    comp: <div>GOSL</div>,
  },
  {
    comp: <div>PLOT</div>,
  },
];

const nav = (route: string, closeMenu?: () => void) => {
  if (closeMenu) {
    closeMenu();
  }
  navigate(route);
};

export const menuLeftEntries = (closeMenu?: () => void): IMenuEntry[] => [
  {
    icon: <IconHome size={mainButtonHeight} />,
    label: 'Home',
    onClick: () => nav('/', closeMenu),
  },
];
