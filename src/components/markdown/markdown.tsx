import ReactMarkdown from "react-markdown";
import type { MarkdownProps } from "./types";
import type { HTMLAttributes } from "react";

const Paragraph = ({ children }: HTMLAttributes<unknown>) => {
  return <p className="mb-4">{children}</p>;
};

const UnorderedList = ({ children }: HTMLAttributes<unknown>) => {
  return <ul className="list-disc pl-5">{children}</ul>;
};

export const Markdown = ({ source }: MarkdownProps) => {
  return (
    <ReactMarkdown
      components={{
        p: Paragraph,
        ul: UnorderedList,
      }}
    >
      {source}
    </ReactMarkdown>
  );
};
