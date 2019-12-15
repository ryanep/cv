import styled from 'styled-components';
import { BubbleStyleProps } from './types';

export const Bubble = styled.div<BubbleStyleProps>`
  display: inline-block;
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  width: 6rem;
  height: 6rem;
  transform: ${({ scale }) => `scale(1.${scale}) `};
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
`;
