import { BASE_URL } from '@/lib/constants'
import { extractUniqueTags, getBlogPostList } from '@/lib/notion'
import { TBlogPostList } from '@/types/notion'

export default async function sitemap() {
  const blogPostList = (await getBlogPostList()) as TBlogPostList[]
  const posts = blogPostList.map(({ id, properties }) => ({
    url: `${BASE_URL}/blog/${id}`,
    lastModified: properties.published.date.start || new Date().toISOString().split('T')[0],
  }))

  const blogTags = extractUniqueTags(blogPostList).map((tagName) => ({
    url: `${BASE_URL}/blog/${tagName}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const routes = ['', '/blog', '/archive'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts, ...blogTags]
}
