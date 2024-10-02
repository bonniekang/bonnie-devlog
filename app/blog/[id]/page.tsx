import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import html from 'rehype-stringify'

import { getNotionPosts } from '@/lib/notion/client'

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const blogPostId = params.id

  const postContent = await getNotionPosts(blogPostId)

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(html)
    .process(postContent)

  return <div dangerouslySetInnerHTML={{ __html: file.value }} />
}
