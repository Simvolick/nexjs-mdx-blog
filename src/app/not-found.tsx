import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import LatestBlogPost from "../components/LatestBlogPost";
import { Post } from "../types/blog";

// This needs to be an async function to get the latest posts
async function getLatestPost(): Promise<Post[]> {
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
  
  return sortedPosts.slice(0, 1);
}

export default async function NotFound() {
  const sortedPost = await getLatestPost();

  return (
    <div className="">
      <div className="mt-44 mb-10 flex flex-col text-center">
        <div className="flex justify-center ">
          <h1 className="px-1 text-4xl">404</h1>
          <h2 className="text-4xl"> - Sorry! Page Not Found</h2>
        </div>
        <LatestBlogPost posts={sortedPost} />
      </div>
    </div>
  );
} 