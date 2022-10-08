import Link from 'next/link'

const BlogPosts = ( {posts} ) => {
return (
    <div className="mt-5">
        {posts.map((post, index) => (
        <Link href={'/blog/' + post.slug} passHref key={index}>
            <div className="mt-3 cursor-pointer text-center">
            <div className="m-2">
            <h1 className="text-center">{post.frontMatter.title}</h1>
            <p className="mt-3 text-center">{post.frontMatter.description}</p>
            <p className="mt-3 text-center">{post.frontMatter.date}</p>

            </div>
            <div className="p-5">
                <Image className="rounded-3xl" src={post.frontMatter.thumbnailUrl} alt={post.frontMatter.title} width={500} height={500} />
            </div>

            </div>
        </Link>
        ))}
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
  


export default BlogPosts
