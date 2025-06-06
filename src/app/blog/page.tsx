import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import BlogPosts from "../../components/BlogPosts";
import { Post } from "../../types/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - All Articles",
  description: "Read all articles about productivity, health, wellness, personal development, and lifestyle improvements. Discover expert insights and practical tips for better living.",
  keywords: ["blog", "articles", "productivity", "health", "wellness", "personal development", "walking", "habits"],
  openGraph: {
    title: "Blog - All Articles | KlimY Blog",
    description: "Read all articles about productivity, health, wellness, personal development, and lifestyle improvements. Discover expert insights and practical tips for better living.",
    type: "website",
    url: "https://klimy.co/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - All Articles | KlimY Blog",
    description: "Read all articles about productivity, health, wellness, personal development, and lifestyle improvements.",
  },
  alternates: {
    canonical: "https://klimy.co/blog",
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

  // Sort posts by jsonDate
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.jsonDate).getTime() - new Date(a.jsonDate).getTime();
  });
  
  return sortedPosts;
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <BlogPosts posts={posts} />
    </div>
  );
} 