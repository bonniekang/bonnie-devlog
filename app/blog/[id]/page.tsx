import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import remarkBreaks from 'remark-breaks'
import ReactMarkdown from 'react-markdown'

import { getNotionPosts } from '@/lib/notion/client'

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const blogPostId = params.id

  const postContent = await getNotionPosts(blogPostId)
  // const file = await unified()
  //   .use(remarkParse) // Parse markdown
  //   .use(remarkGfm) // Support GitHub Flavored Markdown (tables, etc.)
  //   .use(remarkBreaks) // create line breaks in markdown
  //   .use(remarkRehype) // Convert markdown to HTML
  //   .use(rehypeRaw) // Process raw HTML in markdown
  //   .use(rehypeHighlight) // Add syntax highlighting to code blocks
  //   .use(rehypeStringify) // Convert HTML AST to HTML string
  //   .process(postContent) // Process the markdown

  return <ReactMarkdown className={'flex-col'}>{postContent}</ReactMarkdown>
}
