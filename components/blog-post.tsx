import Link from 'next/link'

import { TBlogPost } from '@/types/notion'

export const BlogPost = ({ data, id }: { data: TBlogPost; id: string }) => {
  if (!data.active.checkbox) return null

  return (
    <Link key={id} href={`/blog/${id}`} className="block py-2 hover:underline">
      {data.name.title[0].text.content}
    </Link>
  )
}
