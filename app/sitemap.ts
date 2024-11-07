import { BASE_URL } from '@/lib/constants'
import { getDatabaseData } from '@/lib/notion/database'
import { TBlogList } from '@/types/notion'

export default async function sitemap() {
  const blogs = (await getDatabaseData()) as TBlogList[]
  const posts = blogs
    ?.filter((post) => !!post.properties.active)
    .map(({ id, properties }) => ({
      url: `${BASE_URL}/blog/${id}`,
      lastModified: properties.published.date.start,
    }))

  const blogTags = blogs
    ?.filter((post) => !!post.properties.active)
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
