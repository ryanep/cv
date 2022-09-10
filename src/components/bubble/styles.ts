import styled from "styled-components";
import { BubbleStyleProps } from "./types";

export const Bubble = styled.div<BubbleStyleProps>`
  display: inline-block;
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  width: 1rem;
  height: 1rem;
  transform: ${({ scale }) => `scale(${scale}) `};
  border-radius: 0.2rem;
  background-color: rgba(0, 0, 0, 0.1);
`;
