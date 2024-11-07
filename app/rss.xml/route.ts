import RSS from 'rss'

import { BASE_URL, META_DATA } from '@/lib/constants'

import { getDatabaseData } from '@/lib/notion/database'
import { TBlogList } from '@/types/notion'

export async function GET() {
  const feedOptions = {
    title: META_DATA.title,
    description: META_DATA.description,
    feed_url: `${BASE_URL}/rss.xml`,
    site_url: BASE_URL,
    image_url: `${BASE_URL}/icon.png`,
    copyright: `Copyright ${new Date().getFullYear().toString()}`,
    managingEditor: META_DATA.author,
    webMaster: META_DATA.author,
    language: 'ko-KR',
    pubDate: new Date().toUTCString(),
    ttl: 60,
  }
  const feed = new RSS(feedOptions)

  const blogs = (await getDatabaseData()) as TBlogList[]

  const posts = blogs?.filter((post) => !!post.properties.active)

  posts?.forEach((post) => {
    feed.item({
      title: post.properties.name.title[0].text.content,
      url: `${BASE_URL}/blog/${post.id}`,
      date: post.properties.published.date.start,
      description: post.properties.subtitle.rich_text[0].plain_text,
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
