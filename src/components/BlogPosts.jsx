import fs from "fs"
import * as path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"


const BlogPosts = ( {posts} ) => {
  return (
    <div className="mt-5 mx-5">
        <div className="font-semibold text-2xl flex flex-auto justify-center">
          <div className="bg-orange-400 px-3 py-1 rounded-xl">All Posts:</div></div>
      {posts.map((post, index) => (
        <Link href={'/blog/' + post.slug} passHref key={index}>
          <div className="mt-3 cursor-pointer text-ce1nter">
            <div className="m-2">
            <h1 className="text-center text-2xl font-medium">{post.frontMatter.title}</h1>
            <p className="mt-3 text-center">{post.frontMatter.description}</p>
            <p className="mt-3 text-center text-sm text-gray-600">{post.frontMatter.date}</p>

            </div>
            <div className="p-5 flex justify-center">
              <Image className="rounded-3xl" src={post.frontMatter.thumbnailUrl} alt={post.frontMatter.title} width={500} height={350} />
            </div>

          </div>
        </Link>
        ))}
    </div>
  )
}

export default BlogPosts
