import * as styled from './styles';
import { WrapProps } from './types';

export const Wrap = ({ children }: WrapProps) => {
  return <styled.Wrap>{children}</styled.Wrap>;
};
