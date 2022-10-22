import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { MDXRemote } from 'next-mdx-remote'
import Button from "../../components/Button"
import Image from "next/image"
import { InstagramEmbed } from 'react-social-media-embed';

const components = { Button, SyntaxHighlighter, InstagramEmbed }

const PostPage = ({ frontMatter, mdxSource}) => {
    return (
        <div className="mt-4 m-8 flex-auto grid justify-items-center">
            <h1 className=" text-4xl lg:text-6xl font-bold m-5">{frontMatter.title}</h1>
            <h3 className=" text-lg lg:text-2xl font-bold m-5">{frontMatter.description}</h3>
            <Image className="rounded-3xl" src={frontMatter.thumbnailUrl} alt={frontMatter.title} width={500} height={350} />
            <div className="prose lg:prose-xl pt-10">
                <MDXRemote  {...mdxSource} components={components}/>
            </div>
        </div>
    )
}

const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('src', 'posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('src', 'posts', slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            slug,
            mdxSource,
        }
    }

}

export { getStaticPaths, getStaticProps}
export default PostPage