import Link from 'next/link'

import { getDatabaseData } from '@/lib/notion/database'

export default async function BlogListPage() {
  const list = await getDatabaseData()

  if (!list) return null
  return (
    <div>
      {list.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`} className="block py-2 hover:underline">
          {post.properties.Name.title[0].text.content}
        </Link>
      ))}
    </div>
  )
}
