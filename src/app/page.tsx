import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import BlogPosts from "../components/BlogPosts";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import BrandsSection from "../components/BrandsSection";
import { Post } from "../types/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klim Yadrintsev Blog - Productivity, Health & Personal Development",
  description: "Discover expert insights on productivity, health, wellness, and personal development. Learn about walking benefits, focus techniques, habit building, and lifestyle improvements through evidence-based articles.",
  keywords: [
    "productivity", "health", "wellness", "personal development", "walking benefits", 
    "focus techniques", "habits", "lifestyle", "self-improvement", "mindfulness",
    "work-life balance", "fitness", "mental health"
  ],
  openGraph: {
    title: "Klim Yadrintsev Blog - Productivity, Health & Personal Development",
    description: "Discover expert insights on productivity, health, wellness, and personal development. Learn about walking benefits, focus techniques, habit building, and lifestyle improvements.",
    type: "website",
    url: "https://klimy.co",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klim Yadrintsev Blog - Productivity, Health & Personal Development",
    description: "Discover expert insights on productivity, health, wellness, and personal development.",
  },
  alternates: {
    canonical: "/",
  },
};

// This needs to be an async function to get the posts
async function getAllPosts(): Promise<Post[]> {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'posts'));

  const posts: Post[] = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'src', 'posts', filename));
    const { data: frontMatter } = matter(markdownWithMeta);
    const dateIn = new Date(frontMatter.date);
    const jsonDate = dateIn.toJSON();
     
    return {
      frontMatter,
      slug: filename.split('.')[0],
      jsonDate
    };
  });

  // Sort posts by priority (non-moved content first) then by date
  const sortedPosts = posts.sort((a, b) => {
    // Check if posts have moved-content.webp thumbnail
    const aIsMoved = a.frontMatter.thumbnailUrl?.includes('moved-content.webp');
    const bIsMoved = b.frontMatter.thumbnailUrl?.includes('moved-content.webp');
    
    // If one is moved and other isn't, prioritize the non-moved one
    if (aIsMoved && !bIsMoved) return 1;
    if (!aIsMoved && bIsMoved) return -1;
    
    // If both are same type (both moved or both not moved), sort by date
    return new Date(b.jsonDate).getTime() - new Date(a.jsonDate).getTime();
  });
  
  return sortedPosts.slice(0, 3);
}

export default async function HomePage() {
  const posts = await getAllPosts();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Klim Yadrintsev Blog',
    url: 'https://www.klimy.co',
    description: 'Discover expert insights on productivity, health, wellness, and personal development.',
    author: {
      '@type': 'Person',
      name: 'Klim Yadrintsev',
      url: 'https://www.klimy.co',
    },
    sameAs: [
      // Add your social media URLs here
      // 'https://twitter.com/yourusername',
      // 'https://linkedin.com/in/yourusername',
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.klimy.co/blog?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>

      <div>
        <Hero />
        <ServicesSection />
        <BlogPosts posts={posts} />
        <BrandsSection />
      </div>
    </>
  );
} 