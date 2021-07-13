import * as styled from './styles';
import { MarkdownProps } from './types';

export const Markdown = ({ source }: MarkdownProps) => {
  return <styled.Markdown>{source}</styled.Markdown>;
};
