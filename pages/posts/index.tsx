import Link from 'next/link'

import { allPosts } from '@/contentlayer/generated'

export default function PostsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="py-10 text-3xl">Posts</h1>
      {allPosts.map((post: any) => (
        <div key={post.id}>
          <Link href={`/posts/${post._raw.flattenedPath}`} className="flex items-center gap-4">
            <h1 className="text-[30px]">{post.title}</h1>
          </Link>
        </div>
      ))}
    </main>
  )
}
