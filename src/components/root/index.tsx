import React from 'react';
import * as styled from './styles';
import { RootProps } from './types';

export const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <div>
      <styled.Global />
      {children}
    </div>
  );
};

export default Root;
