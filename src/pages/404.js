import fs from "fs"
import * as path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"
import LatestBlogPost from "../components/LatestBlogPost"

export default function Custom404({sortedPost}) {
    return (
    <div className="">
        <div className="mt-44 mb-10 flex flex-col text-center">
        <div className="flex justify-center ">
            <h1 className="px-1 text-4xl">404</h1>
            <h2 className="text-4xl"> - Sorry! Page Not Found</h2>
        </div>
            <LatestBlogPost posts={sortedPost}/>
        </div>
    </div>
  )}






export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('src', 'posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('src', 'posts', filename))
    const { data:frontMatter } = matter(markdownWithMeta)
    const dateIn = new Date(frontMatter.date)
    const jsonDate = dateIn.toJSON()
     
    return {
      frontMatter,
      slug: filename.split('.')[0],
      jsonDate
    }
  })

  // I need to sort posts by jsonDate
  // Later write the bottom part of sort with passing frontMatter.date

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.jsonDate) - new Date(a.jsonDate)
  })
  const sortedPost = sortedPosts.slice(0, 1)

  return {
    props: {
      sortedPost
    }
  }
}