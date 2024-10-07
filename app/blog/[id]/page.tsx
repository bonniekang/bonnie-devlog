import remarkGfm from 'remark-gfm'

import Markdown from 'react-markdown'

import { getNotionPosts } from '@/lib/notion/client'

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const blogPostId = params.id

  const postContent = await getNotionPosts(blogPostId)

  return (
    <Markdown className={'flex-col'} remarkPlugins={[remarkGfm]} rehypePlugins={[]}>
      {postContent}
    </Markdown>
  )
}
