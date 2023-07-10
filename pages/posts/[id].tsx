import { getAllPosts, getPost } from '../../utils/mdxUtils'

export default function PostPage(props: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="py-10 text-3xl">PostPage</h1>
      <div dangerouslySetInnerHTML={{ __html: props.content.toString() }} />
    </main>
  )
}

export async function getStaticPaths() {
  const postIds = getAllPosts().map((post) => {
    return {
      params: {
        id: post.id,
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
  const post = await getPost(id)

  return {
    props: post,
  }
}
