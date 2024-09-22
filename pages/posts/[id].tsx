import { allPosts } from '@/contentlayer/generated'

export default function PostPage(props: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="py-10 text-3xl">PostPage</h1>
      <h1 className="text-[30px]">{props.title}</h1>
    </main>
  )
}

export async function getStaticPaths() {
  const postIds = allPosts.map((post) => {
    return {
      params: {
        id: post._raw.flattenedPath,
      },
    }
  })

  return {
    paths: postIds,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const { id } = params
  const post = allPosts.find((post) => post._raw.flattenedPath === id)

  return {
    props: post,
  }
}
