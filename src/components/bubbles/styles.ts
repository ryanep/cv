import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
		visibility: hidden;
		opacity: 0;
	}

	to {
		visibility: visible;
		opacity: 1;
	}
`;

export const Bubbles = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 192rem;
  height: 100%;
  transform: translateX(-50%);
  animation: ${fadeIn} 0.3s ease;
  pointer-events: none;
`;
