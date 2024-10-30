import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Markdown from 'react-markdown'

import type { Metadata } from 'next'

import { getNotionPosts } from '@/lib/notion/client'
import { getDatabaseData } from '@/lib/notion/database'
import { TBlogList } from '@/types/notion'

type Props = {
  params: { id: string }
}

const getBlogFromParams = async ({ params }: Props) => {
  const id = (await params).id
  const blogList = (await getDatabaseData()) as TBlogList[]
  const blogData = blogList?.find((blog) => blog.id === id)

  return {
    title: blogData?.properties.name.title[0].text.content ?? 'blog', // constants 에서 default metadata 가져와서 쓰기
    description: blogData?.properties.subtitle.rich_text[0].plain_text ?? 'description',
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogPostData = await getBlogFromParams({ params })

  return {
    title: blogPostData.title,
    description: blogPostData.description,
    openGraph: {
      type: 'article',
      url: `/blog/${params.id}`,
      authors: 'kang',
      // publishedTime,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const blogPostId = params.id

  const postContent = await getNotionPosts(blogPostId)

  return (
    <Markdown
      className={'prose prose-slate'}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {postContent}
    </Markdown>
  )
}
