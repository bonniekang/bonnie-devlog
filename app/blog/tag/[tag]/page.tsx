import type { Metadata } from 'next'

import { META_DATA } from '@/lib/constants'

import { TBlogPostList } from '@/types/notion'

import { getBlogPostList } from '@/lib/notion'

import { BlogPost } from '@/components/blog-post'

type Props = {
  params: { tag: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag)

  return {
    title: `${tag} posts`,
    description: `This is the collection of posts tagged as '${tag}.'`,
    openGraph: {
      type: 'article',
      url: `/blog/${tag}`,
      authors: META_DATA.author,
    },
  }
}

export default async function BlogTagPage({ params }: { params: { tag: string } }) {
  const blogTag = decodeURIComponent(params.tag)

  const blogPostList = (await getBlogPostList()) as TBlogPostList[]
  const taggedPosts = blogPostList.filter((blog) =>
    blog.properties.tags.multi_select.find((tag) => tag.name === blogTag),
  )

  return (
    <>
      <h1 className="text-2xl pb-5"># {blogTag}</h1>
      <div className="flex flex-col gap-5">
        {taggedPosts.map((post: TBlogPostList) => (
          <BlogPost data={post.properties} id={post.id} key={post.id} />
        ))}
      </div>
    </>
  )
}
