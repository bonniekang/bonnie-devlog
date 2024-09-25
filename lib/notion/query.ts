import { Client } from '@notionhq/client'

// Initializing a client
const notionClient = new Client({
  auth: process.env.NOTION_KEY,
})

const pageId = process.env.NOTION_PAGE_ID as string

export const getPosts = async () => {
  return await notionClient.databases.query({
    database_id: pageId,
  })
}
