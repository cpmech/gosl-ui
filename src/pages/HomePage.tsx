import React from 'react';
/** @jsx jsx */ import { jsx } from '@emotion/core';
import { RouteComponentProps } from '@reach/router';
import { store, withUseObserver } from '../service';
import { LoadingOrErrorCard } from '../components';

interface IProps extends RouteComponentProps {}

export const HomePage: React.FC<IProps> = () => {
  const useObserver = withUseObserver(store);
  const { error, ready } = useObserver('App');

  if (!ready) {
    return <LoadingOrErrorCard title="Plot" error={error} />;
  }

  return (
    <div>
      <p>HOME</p>
    </div>
  );
};
