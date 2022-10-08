import Link from "next/link"
import Image from "next/image"
import BlogPosts from "../components/BlogPosts"

export default function Home() {
  return (
    <div className="mt-5">
        <BlogPosts/>
    </div>
  )
}