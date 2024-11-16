import { BASE_URL } from '@/lib/constants'
import { getBlogPostList } from '@/lib/notion'
import { TBlogPostList } from '@/types/notion'

export default async function sitemap() {
  const blogPostList = (await getBlogPostList()) as TBlogPostList[]
  const posts = blogPostList.map(({ id, properties }) => ({
    url: `${BASE_URL}/blog/${id}`,
    lastModified: properties.published.date.start,
  }))

  const blogTags = blogPostList
    .map(({ properties }) => properties.tags.multi_select)
    .flat()
    .reduce((acc: string[], tag) => {
      if (!acc.includes(tag.name)) {
        acc.push(tag.name)
      }
      return acc
    }, [])
    .map((tagName) => ({
      url: `${BASE_URL}/blog/${tagName}`,
      lastModified: new Date().toISOString().split('T')[0],
    }))

  const routes = ['', '/blog', '/about'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts, ...blogTags]
}
