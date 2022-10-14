import fs from "fs"
import * as path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"
import BlogPosts from "../components/BlogPosts"

export default function Home( { posts } ) {
  return (
    <div className="mt-5">
        <BlogPosts posts={posts}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('src', 'posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('src', 'posts', filename))
    const { data:frontMatter } = matter(markdownWithMeta)
     
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}
