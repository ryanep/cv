import React from 'react';
import { MarkdownProps } from './types';
import * as styled from './styles';

export const Markdown: React.FC<MarkdownProps> = ({ source }) => {
  return <styled.Markdown source={source} />;
};

export default Markdown;
