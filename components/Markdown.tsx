import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import remarkMark from "../lib/remarkMark";
import styles from "../styles/MdContent.module.css";

type MarkdownProps = {
  content: string;
};

const Markdown = ({ content }: MarkdownProps) => {
  return (
    <div className={styles.mdContent}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks, remarkMark]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre({ children }) {
            const child = Array.isArray(children) ? children[0] : children;
            const className =
              React.isValidElement<{ className?: string }>(child) &&
              typeof child.props.className === "string"
                ? child.props.className
                : "";
            const langMatch = className.match(/language-([a-z0-9_-]+)/i);
            const lang = langMatch ? langMatch[1] : "";

            return (
              <div className={styles.codeBlock}>
                {lang && <div className={styles.codeLang}>{lang.toUpperCase()}</div>}
                <pre className={styles.codePre}>{children}</pre>
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
