import Link from 'next/link'

import { getDatabaseData } from '@/lib/notion/database'

import { Button } from '@/components/ui/button'

export default async function BlogListPage() {
  const list = await getDatabaseData()

  if (!list) return null
  return (
    <div>
      {list.map((post) => (
        <Button variant={'link'} key={post.id} className="flex">
          <Link href={`/blog/${post.id}`}>{post.properties.Name.title[0].text.content}</Link>
        </Button>
      ))}
    </div>
  )
}
