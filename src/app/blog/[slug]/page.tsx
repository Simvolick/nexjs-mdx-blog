import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import MDXRenderer from '../../../components/MDXRenderer';
import { FrontMatter } from '../../../types/blog';

interface Params {
  slug: string;
}

interface BlogPostPageProps {
  params: Promise<Params>;
}

export async function generateStaticParams(): Promise<Params[]> {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'posts'));
  return files.map(filename => ({ slug: filename.replace('.mdx', '') }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'src', 'posts', slug + '.mdx'), 'utf-8');
  const { data: frontMatter, content }: { data: FrontMatter; content: string } = matter(markdownWithMeta);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {frontMatter.title}
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            {frontMatter.description}
          </p>
          <time className="block text-sm text-gray-500">
            {frontMatter.date}
          </time>
        </header>
        
        {frontMatter.thumbnailUrl && (
          <div className="flex justify-center">
            <Image 
              className="rounded-lg shadow-lg" 
              src={frontMatter.thumbnailUrl} 
              alt={frontMatter.title || 'Blog post'} 
              width={600} 
              height={400}
              priority
            />
          </div>
        )}
        
        <MDXRenderer content={content} />
      </article>
    </div>
  );
} 