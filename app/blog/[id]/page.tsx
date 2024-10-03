import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'
import Markdown from 'react-markdown'
import remarkHtml from 'remark-html'
import rehypeHighlight from 'rehype-highlight'
import remarkBreaks from 'remark-breaks'

import { getNotionPosts } from '@/lib/notion/client'

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const blogPostId = params.id

  const postContent = await getNotionPosts(blogPostId)
  const file = await unified()
    .use(remarkParse) // Parse markdown
    .use(remarkGfm) // GitHub Flavored Markdown for tables
    .use(remarkBreaks)
    .use(remarkRehype) // Convert markdown to HTML
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeStringify) // Convert HTML AST to HTML string
    .process(postContent) // Process the markdown

  return <div dangerouslySetInnerHTML={{ __html: file.value }} />
}
