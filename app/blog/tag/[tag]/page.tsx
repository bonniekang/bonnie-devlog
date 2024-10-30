import type { Metadata } from 'next'

type Props = {
  params: { tag: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = params.tag

  return {
    title: `${tag} posts`,
    description: `This is the collection of posts tagged as '${tag}.'`,
    openGraph: {
      type: 'article',
      url: `/blog/${tag}`,
      authors: 'kang',
      // publishedTime,
    },
  }
}

export default function BlogTagPage({ params }: { params: { tag: string } }) {
  const blogTag = params.tag

  return <>{blogTag}</>
}
