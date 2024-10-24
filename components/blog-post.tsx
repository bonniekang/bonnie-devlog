import Link from 'next/link'

import { TBlogPost } from '@/types/notion'

export const BlogPost = ({ data, id }: { data: TBlogPost; id: string }) => {
  return (
    <Link key={id} href={`/blog/${id}`} className="block py-2 hover:underline">
      {data.Name.title[0].text.content}
    </Link>
  )
}
