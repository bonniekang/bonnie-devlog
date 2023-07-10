import fs from 'fs'
import matter from 'gray-matter'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html' // 흠냐..?
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'

export const getPosts = () => {
  const files = fs.readdirSync(`${process.cwd()}/contents`)

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(`contents/${filename}`).toString()
    const { data: frontmatterData, content } = matter(markdownWithMetadata)

    return {
      id: filename.replace('.mdx', ''),
      frontmatter: frontmatterData,
      content,
    }
  })

  return posts
}

export const getPost = (slug: string) => {
  const file = fs.readFileSync(`${process.cwd()}/contents/${slug}.mdx`).toString()
  const { data: frontmatterData, content } = matter(file)

  const mdAst = unified().use(remarkParse).use(remark2rehype).use(html).processSync(content)

  return {
    frontmatterData,
    content: mdAst.toString(),
  }
}
