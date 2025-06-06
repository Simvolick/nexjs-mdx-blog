import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import MDXRenderer from '../../../components/MDXRenderer';
import { FrontMatter } from '../../../types/blog';
import { Metadata } from 'next';

interface Params {
  slug: string;
}

interface BlogPostPageProps {
  params: Promise<Params>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'src', 'posts', slug + '.mdx'), 'utf-8');
    const { data: frontMatter }: { data: FrontMatter } = matter(markdownWithMeta);
    
    const baseUrl = 'https://klimy.co';
    const postUrl = `${baseUrl}/blog/${slug}`;
    const imageUrl = frontMatter.thumbnailUrl ? `${baseUrl}${frontMatter.thumbnailUrl}` : `${baseUrl}/og-image.jpg`;
    
    return {
      title: frontMatter.title,
      description: frontMatter.description || `Read "${frontMatter.title}" - insights on productivity, health, and personal development.`,
      keywords: frontMatter.tags || ['productivity', 'health', 'wellness', 'personal development'],
      authors: [{ name: 'KlimY' }],
      creator: 'KlimY',
      publisher: 'KlimY Blog',
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      openGraph: {
        title: frontMatter.title,
        description: frontMatter.description || `Read "${frontMatter.title}" - insights on productivity, health, and personal development.`,
        type: 'article',
        url: postUrl,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: frontMatter.title,
          },
        ],
        siteName: 'KlimY Blog',
        publishedTime: frontMatter.date ? new Date(frontMatter.date).toISOString() : new Date().toISOString(),
        tags: frontMatter.tags || [],
      },
      twitter: {
        card: 'summary_large_image',
        title: frontMatter.title,
        description: frontMatter.description || `Read "${frontMatter.title}" - insights on productivity, health, and personal development.`,
        images: [imageUrl],
      },
      alternates: {
        canonical: postUrl,
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post | KlimY Blog',
      description: 'Read insights on productivity, health, and personal development.',
    };
  }
}

export async function generateStaticParams(): Promise<Params[]> {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'posts'));
  return files.map(filename => ({ slug: filename.replace('.mdx', '') }));
}

function generateStructuredData(frontMatter: FrontMatter, slug: string) {
  const baseUrl = 'https://klimy.co';
  const postUrl = `${baseUrl}/blog/${slug}`;
  const imageUrl = frontMatter.thumbnailUrl ? `${baseUrl}${frontMatter.thumbnailUrl}` : `${baseUrl}/og-image.jpg`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontMatter.title,
    description: frontMatter.description,
    image: imageUrl,
    url: postUrl,
    datePublished: frontMatter.date ? new Date(frontMatter.date).toISOString() : new Date().toISOString(),
    dateModified: frontMatter.date ? new Date(frontMatter.date).toISOString() : new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: 'KlimY',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'KlimY Blog',
      url: baseUrl,
    },
    keywords: frontMatter.tags?.join(', ') || 'productivity, health, wellness',
    articleSection: 'Blog',
    inLanguage: 'en-US',
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'src', 'posts', slug + '.mdx'), 'utf-8');
  const { data: frontMatter, content }: { data: FrontMatter; content: string } = matter(markdownWithMeta);

  const structuredData = generateStructuredData(frontMatter, slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {frontMatter.title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              {frontMatter.description}
            </p>
            <time className="block text-sm text-gray-500" dateTime={frontMatter.date ? new Date(frontMatter.date).toISOString() : new Date().toISOString()}>
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
    </>
  );
} 