import React from 'react';
import Bubble from '../bubble';
import * as styled from './styles';

export const Bubbles: React.FC = () => {
  const bubbleArray = [...new Array(10)].map((item, index) => index);
  return (
    <styled.Bubbles>
      {bubbleArray.map(item => (
        <Bubble key={item} />
      ))}
    </styled.Bubbles>
  );
};

export default Bubbles;
