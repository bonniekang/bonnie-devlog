import fs from 'fs'
import matter from 'gray-matter'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'

export const getAllPosts = () => {
  const mdxFiles = fs.readdirSync(`${process.cwd()}/contents`)

  const posts = mdxFiles.map((filename) => {
    const mdxFullContent = fs.readFileSync(`contents/${filename}`).toString()
    const { data: frontmatterData, content } = matter(mdxFullContent)

    return {
      id: filename.replace('.mdx', ''),
      frontmatter: frontmatterData,
      content,
    }
  })

  return posts
}

export const getPost = (id: string) => {
  const mdxFullContent = fs.readFileSync(`${process.cwd()}/contents/${id}.mdx`).toString()
  const { data: frontmatterData, content } = matter(mdxFullContent)

  const transformedContent = unified()
    .use(remarkParse)
    .use(remark2rehype)
    .use(html)
    .processSync(content)
    .toString()

  return {
    frontmatterData,
    content: transformedContent,
  }
}
