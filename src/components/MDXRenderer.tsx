import { MDXRemote } from 'next-mdx-remote/rsc';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Button from './Button';
import InstagramEmbedClient from './InstagramEmbedClient';

const components = { 
  Button, 
  SyntaxHighlighter, 
  InstagramEmbed: InstagramEmbedClient 
};

interface MDXRendererProps {
  content: string;
}

const MDXRenderer: React.FC<MDXRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none mx-auto prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
      <MDXRemote source={content} components={components} />
    </div>
  );
};

export default MDXRenderer; 