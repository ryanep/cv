import ReactMarkdown from "react-markdown";
import type { MarkdownProps } from "./types";

export const Markdown = ({ source }: MarkdownProps) => {
  return (
    <ReactMarkdown
      components={{
        p: ({ node, ...props }) => <p {...props} className="mb-4" />,
        ul: ({ node, depth, ordered, ...props }) => (
          <ul {...props} className="list-disc pl-5" />
        ),
      }}
    >
      {source}
    </ReactMarkdown>
  );
};
