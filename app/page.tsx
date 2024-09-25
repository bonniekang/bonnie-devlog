import { getPosts } from '@/lib/notion/query'

import { Button } from '@/components/ui/button'

export default async function Page() {
  const posts = await getPosts()

  return (
    <>
      <Button>Blog???</Button>
      <Button variant="destructive">Blog???</Button>
      <Button variant="outline">Blog???</Button>
      <Button variant="secondary">Blog???</Button>
      <Button variant="ghost">Blog???</Button>
      <Button variant="link">Blog???</Button>
    </>
  )
}
