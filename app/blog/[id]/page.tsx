import type { Metadata } from 'next'

import { getNotionPosts, getBlogPostList } from '@/lib/notion'
import { META_DATA } from '@/lib/constants'

import { TBlogPostList } from '@/types/notion'

import { NotionRenderer } from '@/components/notion/renderer'

type Props = {
  params: { id: string }
}

export async function generateStaticParams() {
  const blogPostList = (await getBlogPostList()) as TBlogPostList[]
  return blogPostList.map((blog) => ({ id: blog.id }))
}

const getBlogFromParams = async ({ params }: Props) => {
  const id = (await params).id
  const blogPostList = (await getBlogPostList()) as TBlogPostList[]
  const blogData = blogPostList?.find((blog) => blog.id === id)

  return {
    title: blogData?.properties.name.title[0].text.content ?? META_DATA.title,
    description: blogData?.properties.subtitle.rich_text[0].plain_text ?? META_DATA.description,
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
      authors: META_DATA.author,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const blogPostId = params.id

  const allBlocks = await getNotionPosts(blogPostId)

  return (
    <article className="prose prose-neutral max-w-none">
      {allBlocks.map((block, index) => (
        <NotionRenderer
          blockData={block}
          allBlocks={allBlocks}
          currentBlockIdx={index}
          key={`${index}-${block.id}`}
        />
      ))}
    </article>
  )
}
