import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  padding: 2rem 0;
  overflow: hidden;
  background-color: rgb(162, 86, 86);
`;

export const Content = styled.div`
  display: flex;
  z-index: 1;
  flex-grow: 1;
  align-items: center;
`;

export const Heading = styled.h1`
  flex-grow: 1;
`;

export const Name = styled.div`
  color: white;
  font-size: 2.4rem;
  font-weight: 900;
`;

export const Title = styled.div`
  color: white;
  font-size: 1.8rem;
`;

export const Link = styled.a`
  display: block;
  color: white;
`;
