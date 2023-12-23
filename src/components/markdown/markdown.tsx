import ReactMarkdown from "react-markdown";
import type { HTMLAttributes } from "react";

const Paragraph = ({ children }: HTMLAttributes<unknown>) => {
  return <p className="mb-4">{children}</p>;
};

const UnorderedList = ({ children }: HTMLAttributes<unknown>) => {
  return <ul className="list-disc pl-5">{children}</ul>;
};

const Strong = ({ children }: HTMLAttributes<unknown>) => {
  return <strong className="font-semibold">{children}</strong>;
};

interface MarkdownProps {
  readonly source: string;
}

export const Markdown = ({ source }: MarkdownProps) => {
  return (
    <ReactMarkdown
      components={{
        p: Paragraph,
        strong: Strong,
        ul: UnorderedList,
      }}
    >
      {source}
    </ReactMarkdown>
  );
};
