import Link from 'next/link'
import { format } from 'date-fns'

import { TBlogPost } from '@/types/notion'

import { Tag } from '@/components/tag'

export const BlogPost = ({ data, id }: { data: TBlogPost; id: string }) => {
  if (!data.active.checkbox) return null

  return (
    <div>
      <Link key={id} href={`/blog/${id}`} className="block py-2 group">
        <h2 className="text-lg group-hover:underline">{data.name.title[0].text.content}</h2>
        <p className="text-xs pb-3">{format(data.published.date.start, 'MMM dd, yyyy')}</p>
        <p className="text-sm text-neutral-500 font-light group-hover:none">
          {data.subtitle.rich_text[0].plain_text}
        </p>
      </Link>
      <ul className="flex gap-5">
        {data.tags.multi_select.map((tag) => (
          <Tag tagName={tag.name} key={tag.id} />
        ))}
      </ul>
    </div>
  )
}
