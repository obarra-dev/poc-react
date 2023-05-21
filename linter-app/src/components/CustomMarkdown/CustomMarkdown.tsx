import Markdown from "react-markdown";
import classNames from "classnames";

export function CustomMarkdown({ content, className }: CustomMarkdownProps) {
  return (
    <Markdown
      children={content}
      className={classNames("lift-markdown", className)}
    />
  );
}

interface CustomMarkdownProps {
  content: string;
  className?: string;
}
