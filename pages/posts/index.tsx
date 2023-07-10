import Link from 'next/link'

import { getPosts } from '../../utils/mdxUtils'

export default function PostsPage({ posts }: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="py-10 text-3xl">Posts</h1>
      {posts.map((post: any) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
        </div>
      ))}
    </main>
  )
}

export async function getStaticProps() {
  const posts = getPosts()
  return {
    props: {
      posts,
    },
  }
}
