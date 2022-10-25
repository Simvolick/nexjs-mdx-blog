import fs from "fs"
import * as path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"


const BlogPosts = ( {posts} ) => {
  return (
    <div className="mt-5 mx-5 text-center">
        <div className="font-semibold text-5xl flex flex-auto justify-center ">
          <div className="bg-orange-400 px-3 py-1 rounded-xl">All Posts:</div></div>
      {posts.map((post, index) => (
          <Link href={'/blog/' + post.slug} passHref key={index}>
            <a>
          <div className="mt-3 text-center items-center cursor-pointer md:mx-32 lg:mx-52" >
            <div className="m-2">
            <h2 className="text-2xl font-medium">{post.frontMatter.title}</h2>
            <p className="mt-3 text-center sm:mx-20 lg:mx-40">{post.frontMatter.description}</p>
            <p className="mt-3 text-center text-sm text-gray-600">{post.frontMatter.date}</p>

            </div>
            <div className="py-5 flex justify-center">
              <Image className="rounded-3xl" src={post.frontMatter.thumbnailUrl} alt={post.frontMatter.title} width={500} height={350} />
            </div>

          </div>
          </a>
          </Link>
        ))}
    </div>
  )
}

export default BlogPosts
