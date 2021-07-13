import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

export const Markdown = styled(ReactMarkdown)`
  p {
    margin-bottom: 0.5rem;
  }

  ul {
    padding-left: 1.2em;
    list-style-type: disc;
  }
`;
