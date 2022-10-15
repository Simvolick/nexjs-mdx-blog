import fs from "fs"
import * as path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"
import BlogPosts from "../components/BlogPosts"



export default function Home( { sortedPosts } ) {
  return (
    <div className="mt-5">
        <BlogPosts posts={sortedPosts}/>
    </div>
  )
}

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

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.jsonDate) - new Date(a.jsonDate)
  })

  return {
    props: {
      sortedPosts
    }
  }
}
