import type { Metadata } from 'next'

import { TBlogPostList } from '@/types/notion'

import { getBlogPostList } from '@/lib/notion'

import { BlogPost } from '@/components/blog-post'

export const metadata: Metadata = {
  title: 'blog',
  description: 'blog page',
  openGraph: {
    url: '/blog',
  },
}

export default async function BlogListPage() {
  const blogPostList = (await getBlogPostList()) as TBlogPostList[]

  if (!blogPostList) return null

  return (
    <div className="flex flex-col gap-5">
      {blogPostList.map((post: TBlogPostList) => (
        <BlogPost data={post.properties} id={post.id} key={post.id} />
      ))}
    </div>
  )
}
