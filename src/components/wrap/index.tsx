import React from 'react';
import { WrapProps } from './types';
import * as styled from './styles';

export const Wrap: React.FC<WrapProps> = ({ children }) => {
  return <styled.Wrap>{children}</styled.Wrap>;
};

export default Wrap;
