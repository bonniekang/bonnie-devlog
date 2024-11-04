import { BlogPost } from '@/components/blog-post'
import { getDatabaseData } from '@/lib/notion/database'
import { TBlogList } from '@/types/notion'
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
    },
  }
}

export default async function BlogTagPage({ params }: { params: { tag: string } }) {
  const blogTag = params.tag

  const blogList = (await getDatabaseData()) as TBlogList[]
  const taggedPosts = blogList.filter((blog) =>
    blog.properties.tags.multi_select.find((tag) => tag.name === blogTag),
  )

  return (
    <>
      <h1 className="text-2xl pb-5"># {blogTag}</h1>
      <div className="flex flex-col gap-5">
        {taggedPosts.map((post: TBlogList) => (
          <BlogPost data={post.properties} id={post.id} key={post.id} />
        ))}
      </div>
    </>
  )
}
