import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Markdown from 'react-markdown'

import { getNotionPosts } from '@/lib/notion/client'

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const blogPostId = params.id

  const postContent = await getNotionPosts(blogPostId)

  return (
    <Markdown
      className={'flex-col prose prose-slate'}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {postContent}
    </Markdown>
  )
}
