import Link from 'next/link'

import { TBlogList, TBlogPost } from '@/types/notion'

import { getDatabaseData } from '@/lib/notion/database'

export default async function BlogListPage() {
  const blogList = (await getDatabaseData()) as TBlogList[]

  if (!blogList) return null

  return (
    <div>
      {blogList.map((post: TBlogList) => (
        <BlogPost data={post.properties} id={post.id} />
      ))}
    </div>
  )
}

const BlogPost = ({ data, id }: { data: TBlogPost; id: string }) => {
  return (
    <Link key={id} href={`/blog/${id}`} className="block py-2 hover:underline">
      {data.Name.title[0].text.content}
    </Link>
  )
}
