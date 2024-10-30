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

  /**
   * @todo
   * tag.. 페이지....
   */

  const routes = ['', '/blog', '/projects'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
