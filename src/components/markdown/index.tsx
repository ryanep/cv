import React from 'react';
import * as styled from './styles';
import { MarkdownProps } from './types';

export const Markdown = ({ source }: MarkdownProps) => {
  return <styled.Markdown source={source} />;
};
