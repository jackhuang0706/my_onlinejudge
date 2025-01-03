import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface Props {
  content: string;
}

export default function MarkdownRenderer({ content }: Props) {
  return (
    <ReactMarkdown
      className="markdown"
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {content}
    </ReactMarkdown>
  );
} 