import Link from 'next/link'

import { getAllPosts } from '../../utils/mdxUtils'

export default function PostsPage({ posts }: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="py-10 text-3xl">Posts</h1>
      {posts.map((post: any) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} className="flex items-center gap-4">
            <h1 className="text-[30px] ">{post.frontmatter.title}</h1>
            <p className="underline">{post.frontmatter.description}</p>
          </Link>
        </div>
      ))}
    </main>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}
