import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {}

export const NotFoundPage: React.FC<IProps> = () => {
  return (
    <div>
      <p>NOT FOUND</p>
    </div>
  );
};
