import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import BlogPosts from "../../components/BlogPosts";
import { Post } from "../../types/blog";

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