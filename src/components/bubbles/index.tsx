import { Bubble } from "#/components/bubble";
import * as styled from "./styles";

export const Bubbles = () => {
  const bubbleArray = [...new Array(10)].map((item, index) => index);
  return (
    <styled.Bubbles>
      {bubbleArray.map((item) => (
        <Bubble key={item} />
      ))}
    </styled.Bubbles>
  );
};
