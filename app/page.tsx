import { Client } from '@notionhq/client'

import { Button } from '@/components/ui/button'

export default async function Page() {
  // Initializing a client
  const notionClient = new Client({
    auth: process.env.NOTION_KEY,
  })

  const pageId = process.env.NOTION_PAGE_ID as string

  const response = await notionClient.databases.query({
    database_id: pageId,
  })

  console.log('response', response.results[0].properties.Name.title[0].text)

  return (
    <>
      <Button>Blog???</Button>
      <Button variant="destructive">Blog???</Button>
      <Button variant="outline">Blog???</Button>
      <Button variant="secondary">Blog???</Button>
      <Button variant="ghost">Blog???</Button>
      <Button variant="link">Blog???</Button>

      <div>
        {response.results.map((post, index) => (
          <p key={index}>{post.properties.Name.title[0].plain_text}</p>
        ))}
      </div>
    </>
  )
}
