import React from 'react';
/** @jsx jsx */ import { jsx } from '@emotion/core';
import { RouteComponentProps } from '@reach/router';
import { store, withUseObserver } from '../service';
import { LoadingOrErrorCard } from '../components';
import { InfoCard } from '../rcomps';
import { styles } from '../styles';

interface IProps extends RouteComponentProps {}

export const HomePage: React.FC<IProps> = () => {
  const useObserver = withUseObserver(store);
  const { error, ready } = useObserver('App');

  if (!ready) {
    return (
      <div css={styles.content}>
        <LoadingOrErrorCard title="Loading" error={error} />
      </div>
    );
  }

  return (
    <div css={styles.content}>
      <InfoCard title="Plot">PLOT GOES HERE</InfoCard>
    </div>
  );
};
