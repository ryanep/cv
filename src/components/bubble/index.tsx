import * as styled from './styles';

const getRandomNumber = (length: number, start: number = 1) => {
  return Math.floor(Math.random() * (length - start) + start);
};

export const Bubble = () => {
  const bubbleWidth = 80;
  const maxWidth = 1920;
  const maxHeight = 10;
  const scale = 6;

  return (
    <styled.Bubble
      left={getRandomNumber(maxWidth)}
      top={getRandomNumber(maxHeight, bubbleWidth)}
      scale={getRandomNumber(scale)}
    />
  );
};
