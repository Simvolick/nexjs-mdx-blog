import FastLink from "./FastLink";
import Image from "next/image";
import { Post } from "../types/blog";

interface LatestBlogPostProps {
  posts: Post[];
}

const LatestBlogPost: React.FC<LatestBlogPostProps> = ({ posts }) => {
  return (
    <div className="mt-5 mx-5 text-center">
        <div className="font-semibold text-5xl flex flex-auto justify-center ">
          <div className="bg-orange-400 px-3 py-1 rounded-xl">Latest Post:</div></div>
      {posts.map((post, index) => (
          <FastLink href={'/blog/' + post.slug} key={index}>
          <div className="mt-3 text-center items-center cursor-pointer md:mx-32 lg:mx-52" >
            <div className="m-2">
            <h2 className="text-2xl font-medium">{post.frontMatter.title}</h2>
            <p className="mt-3 text-center sm:mx-20 lg:mx-40">{post.frontMatter.description}</p>
            <p className="mt-3 text-center text-sm text-gray-600">{post.frontMatter.date}</p>

            </div>
            <div className="py-5 flex justify-center">
              <Image className="rounded-3xl" src={post.frontMatter.thumbnailUrl || ''} alt={post.frontMatter.title || 'Blog post'} width={500} height={350} />
            </div>

          </div>
          </FastLink>
        ))}
    </div>
  );
};

export default LatestBlogPost; 