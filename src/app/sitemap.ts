import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.klimy.co';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bio`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Get all blog posts with error handling
  let blogPosts: MetadataRoute.Sitemap = [];
  
  try {
    const postsDirectory = path.join(process.cwd(), 'src', 'posts');
    
    if (!fs.existsSync(postsDirectory)) {
      console.warn('Posts directory does not exist');
      return staticPages;
    }
    
    const filenames = fs.readdirSync(postsDirectory);
    
    blogPosts = filenames
      .filter(name => name.endsWith('.mdx'))
      .map(filename => {
        try {
          const slug = filename.replace('.mdx', '');
          const filePath = path.join(postsDirectory, filename);
          
          if (!fs.existsSync(filePath)) {
            console.warn(`Post file does not exist: ${filePath}`);
            return null;
          }
          
          const fileContents = fs.readFileSync(filePath, 'utf8');
          const { data: frontMatter } = matter(fileContents);
          
          // Skip posts that are marked as draft or unpublished
          if (frontMatter.draft === true || frontMatter.published === false) {
            return null;
          }
          
          // Validate required frontmatter
          if (!frontMatter.title) {
            console.warn(`Post missing title: ${filename}`);
            return null;
          }
          
          return {
            url: `${baseUrl}/blog/${slug}`,
            lastModified: frontMatter.date ? new Date(frontMatter.date) : new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
          };
        } catch (error) {
          console.error(`Error processing post ${filename}:`, error);
          return null;
        }
      })
      .filter((post): post is NonNullable<typeof post> => post !== null);
  } catch (error) {
    console.error('Error generating blog posts for sitemap:', error);
  }

  return [...staticPages, ...blogPosts];
} 