import type { Metadata } from 'next'

import { extractUniqueTags, getBlogPostList } from '@/lib/notion'

import { TBlogPostList } from '@/types/notion'

import { Tag } from '@/components/tag'

export const metadata: Metadata = {
  title: 'tag',
  description: 'tag page',
  openGraph: {
    url: '/tag',
  },
}

export default async function TagPage() {
  const blogPostList = (await getBlogPostList()) as TBlogPostList[]

  const blogTags = extractUniqueTags(blogPostList)

  return (
    <ul className="flex gap-3 flex-wrap">
      {blogTags.map((tag, index) => (
        <Tag tagName={tag} key={index} />
      ))}
    </ul>
  )
}
