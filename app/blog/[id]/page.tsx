import type { Metadata } from 'next'

import { META_DATA } from '@/lib/constants'
import { getNotionPosts, getBlogPostList } from '@/lib/notion'
import { formatDate } from '@/lib/utils'

import { TBlogPostList } from '@/types/notion'

import { NotionRenderer } from '@/components/notion/renderer'
import { Tag } from '@/components/tag'

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
    title:
      blogData?.properties.name.title.map((item) => item.plain_text).join('') ?? META_DATA.title,
    description: blogData?.properties.subtitle.rich_text[0].plain_text ?? META_DATA.description,
    publishedDate: blogData?.properties.published.date.start ?? '',
    tags: blogData?.properties.tags.multi_select ?? [],
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, description } = await getBlogFromParams({ params })

  return {
    title,
    description,
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

  const { title, publishedDate, tags } = await getBlogFromParams({ params })

  return (
    <article>
      <header>
        <h2 className="text-base m-0 pb-2 text-stone-700 font-semibold">{title}</h2>
        <p className="text-xs m-0 pb-2">{formatDate(publishedDate)}</p>
        <ul className="flex gap-3 flex-wrap">
          {tags.map((tag) => (
            <Tag tagName={tag.name} key={tag.id} />
          ))}
        </ul>
      </header>
      <hr className="h-px w-full mt-4 mb-12 bg-stone-200" />
      <section className="prose prose-neutral max-w-none prose-headings:my-5 ">
        {allBlocks.map((block, index) => (
          <NotionRenderer
            blockData={block}
            allBlocks={allBlocks}
            currentBlockIdx={index}
            key={`${index}-${block.id}`}
          />
        ))}
      </section>
    </article>
  )
}
