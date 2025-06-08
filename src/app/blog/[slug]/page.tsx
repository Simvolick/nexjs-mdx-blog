import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import MDXRenderer from '../../../components/MDXRenderer';
import { FrontMatter } from '../../../types/blog';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Params {
  slug: string;
}

interface BlogPostPageProps {
  params: Promise<Params>;
}

// Helper function to get post data with error handling
async function getPostData(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'posts', slug + '.mdx');
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const { data: frontMatter, content } = matter(markdownWithMeta);
    
    // Validate required frontmatter
    if (!frontMatter.title) {
      console.error(`Post ${slug} is missing required title`);
      return null;
    }
    
    return { frontMatter: frontMatter as FrontMatter, content };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  const postData = await getPostData(slug);
  
  if (!postData) {
    return {
      title: 'Post Not Found | Klim Yadrintsev Blog',
      description: 'The requested blog post could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  
  const { frontMatter } = postData;
  const baseUrl = 'https://klimy.co';
  const postUrl = `${baseUrl}/blog/${slug}`;
  const imageUrl = frontMatter.thumbnailUrl ? `${baseUrl}${frontMatter.thumbnailUrl}` : `${baseUrl}/og-image.jpg`;
  
  return {
    title: frontMatter.title,
    description: frontMatter.description || `Read "${frontMatter.title}" - insights on productivity, health, and personal development.`,
    keywords: frontMatter.tags || ['productivity', 'health', 'wellness', 'personal development'],
    authors: [{ name: 'Klim Yadrintsev' }],
    creator: 'Klim Yadrintsev',
    publisher: 'Klim Yadrintsev Blog',
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
      siteName: 'Klim Yadrintsev Blog',
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
      canonical: `/blog/${slug}`,
    },
  };
}

export async function generateStaticParams(): Promise<Params[]> {
  try {
    const postsDirectory = path.join(process.cwd(), 'src', 'posts');
    
    if (!fs.existsSync(postsDirectory)) {
      console.warn('Posts directory does not exist');
      return [];
    }
    
    const files = fs.readdirSync(postsDirectory);
    
    return files
      .filter(filename => filename.endsWith('.mdx'))
      .map(filename => ({ slug: filename.replace('.mdx', '') }))
      .filter(({ slug }) => {
        // Validate that the post can be loaded properly
        const filePath = path.join(postsDirectory, slug + '.mdx');
        try {
          const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
          const { data: frontMatter } = matter(markdownWithMeta);
          return frontMatter.title && frontMatter.published !== false && !frontMatter.draft;
        } catch {
          return false;
        }
      });
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
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
      name: 'Klim Yadrintsev',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Klim Yadrintsev Blog',
      url: baseUrl,
    },
    keywords: frontMatter.tags?.join(', ') || 'productivity, health, wellness',
    articleSection: 'Blog',
    inLanguage: 'en-US',
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  const postData = await getPostData(slug);
  
  if (!postData) {
    notFound();
  }
  
  const { frontMatter, content } = postData;
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