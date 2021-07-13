import React from 'react';
import { BubbleStyleProps } from './types';
import * as styled from './styles';

export const Bubble: React.FC = () => {
  const bubbleWidth = 80;
  const maxWidth = 1920;
  const maxHeight = 10;
  const scale = 6;

  const getRandomNumber = (length: number, start: number = 1) => {
    return Math.floor(Math.random() * (length - start) + start);
  };

  const position: BubbleStyleProps = {
    left: getRandomNumber(maxWidth),
    top: getRandomNumber(maxHeight, bubbleWidth),
    scale: getRandomNumber(scale),
  };

  return <styled.Bubble {...position} />;
};

export default Bubble;
