import { TBlogList } from '@/types/notion'

import { getDatabaseData } from '@/lib/notion/database'

import { BlogPost } from '@/components/blog-post'

export default async function BlogListPage() {
  const blogList = (await getDatabaseData()) as TBlogList[]

  if (!blogList) return null

  return (
    <div>
      {blogList.map((post: TBlogList) => (
        <BlogPost data={post.properties} id={post.id} key={post.id} />
      ))}
    </div>
  )
}
