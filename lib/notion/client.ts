import { Client } from '@notionhq/client'

// Initializing a notion client
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})
